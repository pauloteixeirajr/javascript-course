import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (recipeId) {
  try {
    const { data } = await getJSON(`${API_URL}/${recipeId}`);

    const { recipe: values } = data;
    state.recipe = {
      cookingTime: values.cooking_time,
      id: values.id,
      image: values.image_url,
      ingredients: values.ingredients,
      publisher: values.publisher,
      servings: values.servings,
      sourceUrl: values.source_url,
      title: values.title,
    };
  } catch (err) {
    console.log(err);
  }
};
