import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const recipeId = window.location.hash.slice(1);
    if (!recipeId) return;
    recipeView.renderSpinner();

    // Loading Recipe
    await model.loadRecipe(recipeId);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    console.log(e);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
