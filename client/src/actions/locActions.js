im

export const filterPizzas = (searchkey, category) => async (dispatch) => {
  var filteredPizzas;
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    filteredPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );

    if (category != "all") {
      filteredPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() == category
      );
    }

    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
