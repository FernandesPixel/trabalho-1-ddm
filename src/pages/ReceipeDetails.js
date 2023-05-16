import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getRecipeInformation } from '../../api';
import { useNavigation } from '@react-navigation/native';

const RecipeDetails = ({ route }) => {
  const { recipeId } = route.params;
  const [information, setInformation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipeInformation(recipeId);
      setInformation(response);
    };
    fetchData();
  }, [recipeId]);

  const renderIngredient = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.name}: </Text>
        <Text>{item.original}</Text>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={{ uri: information.image }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Receita: {information.title}</Text>
      <Text>Tempo de preparo: {information.readyInMinutes} min</Text>
      <Text>pontuação de saúde: {information.healthScore}</Text>
      <Text>Ingredientes</Text>
      <FlatList
        data={information.extendedIngredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RecipeDetails;
