import axios from 'axios';
import API_PATHS from './apiPaths';

export const getProductsList = async () => {
  try {
    const { data } = await axios.get(`${API_PATHS.productService}/products/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
