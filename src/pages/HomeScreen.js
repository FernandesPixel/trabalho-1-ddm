import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Receitas aleatórias"
        onPress={() => navigation.navigate('RandomRecipe')}
      />
    </View>
  );
};

export default Home;