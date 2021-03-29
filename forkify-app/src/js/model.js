export const state = {
  recipe: {},
};

export const loadRecipe = async function (recipeId) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const { recipe: values } = data.data;
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
