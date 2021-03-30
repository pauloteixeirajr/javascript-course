import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

const controlRecipes = async function () {
  try {
    const recipeId = window.location.hash.slice(1);
    if (!recipeId) return;
    recipeView.renderSpinner();

    // Update results view to mark selected search result

    resultView.update(model.getSearchResultsPage());

    // Loading Recipe
    await model.loadRecipe(recipeId);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    resultView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlPagination = function (page) {
  resultView.render(model.getSearchResultsPage(page));
  paginationView.render(model.state.search);
};

const controlServings = function (servings) {
  // update the recipe servings (in state)
  model.updateServings(servings);

  // update the recipe view
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
