import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async function (recipeId) {
  try {
    const { data } = await getJSON(`${API_URL}${recipeId}`);

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
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
      };
    });
    console.log(state);
  } catch (err) {
    throw err;
  }
};
