import { types } from "../types";
import { axiosClient } from "../config/axios";

export const addNewProductAction = (product) => {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
        await axiosClient.post('hola', product)
        dispatch(addProductSuccess(product))
    } catch (error) {
        console.log(error)
        dispatch(addProductError(true))

    }
  };
};

const addProduct = () => ({
  type: types.ADD_PRODUCT,
  payload: true
});

const addProductSuccess= (product) => ({
    type: types.ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (error) => ({
    type: types.ADD_PRODUCT_ERROR,
    payload: error
})