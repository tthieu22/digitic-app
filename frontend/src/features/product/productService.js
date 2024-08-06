import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product/`);
    return response.data;
  } catch (error) {
    throw error.response && error.response.data
      ? error.response.data
      : error.message;
  }
};
const addToWishlist = async (prodId) => {
  try {
    const response = await axios.put(
      `${base_url}product/wishlist/`,
      { prodId },
      config
    );
    return response.data;
  } catch (error) {
    throw error.response && error.response.data
      ? error.response.data
      : error.message;
  }
};
export const productService = {
  getProducts,
  addToWishlist,
};
