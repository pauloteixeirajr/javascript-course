import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
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
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  // Example to explain the logic
  // page = 1
  // resultsPerPage = 10
  // page - 1 = 0 * 10 = 0 - so start from index 0
  // page * 10 = 10 - so it slices until the tenth element
  // page = 2
  // page - 1 = 1 * 10 = 10;
  // page * 10 = 20
  // etc...
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    // newQt = oldQt * newServings / oldServings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};
