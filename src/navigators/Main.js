import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import RandomRecipe from '../pages/RandomRecipe'
import RecipeDetails from '../pages/ReceipeDetails'

const MainStack = createStackNavigator();

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="RandomRecipe" component={RandomRecipe} />
    <MainStack.Screen name="RecipeDetails" component={RecipeDetails} />
  </MainStack.Navigator>
);

export default MainStackNavigator;
