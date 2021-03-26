const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const { recipe: values } = data.data;
    const recipe = {
      cookingTime: values.cooking_time,
      id: values.id,
      image: values.image_url,
      ingredients: values.ingredients,
      publisher: values.publisher,
      servings: values.servings,
      sourceUrl: values.source_url,
      title: values.title,
    };

    console.log(recipe);
  } catch (e) {
    console.log(e);
  }
};

showRecipe();
