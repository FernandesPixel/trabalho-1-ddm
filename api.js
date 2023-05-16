import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getRandomRecipes = async () => {
  const response = await api.get('/random',{
    params:{
        apiKey: '1bb111d292f34f33860ae04ba8d362e2',
        number: 10
    }
  });
  return response.data;
};

export const getRecipeInformation = async (recipeId) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
          apiKey: '1bb111d292f34f33860ae04ba8d362e2',
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
};
