import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  try {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
      const { token, ...user } = response.data; // Giả sử response.data chứa cả token và thông tin người dùng
      localStorage.setItem("customer", JSON.stringify(user));
      localStorage.setItem("token", token); // Lưu token riêng nếu có
      return response.data;
    }
  } catch (error) {
    throw error.response && error.response.data
      ? error.response.data
      : error.message;
  }
};
const login = async (userData) => {
  try {
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
      const { token, ...user } = response.data; // Giả sử response.data chứa cả token và thông tin người dùng
      localStorage.setItem("customer", JSON.stringify(user));
      localStorage.setItem("token", token); // Lưu token riêng nếu có
      return response.data;
    }
  } catch (error) {}
};
const getaWishlist = async () => {
  try {
    const response = await axios.get(`${base_url}user/wish-list`, config);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error.response?.data || error;
  }
};
export const authService = {
  register,
  login,
  getaWishlist,
};
