import axios from "axios";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteProduct = id => dispatch => {
  axios.delete(`/api/products/${id}`).then(() => res.json("Product deleted"));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
