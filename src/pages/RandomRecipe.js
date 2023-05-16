import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getRandomRecipes } from '../../api';
import { useNavigation } from '@react-navigation/native';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const navigation = useNavigation();

  const handleRecipePress = (id) => {
    navigation.navigate("RecipeDetails", { recipeId: id });
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleRecipePress(item.id)}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      flexDirection: 'column',
      margin: 1,
    },
    image: {
      height: 120,
      width: '100%',
      resizeMode: 'cover',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRandomRecipes();
      setRecipe(response.recipes);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={recipe}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
  );
};



export default RandomRecipe;