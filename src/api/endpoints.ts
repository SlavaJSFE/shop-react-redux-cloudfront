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

export const getProductById = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_PATHS.productService}/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product: any) => {
  try {
    const { data } = await axios.post(`${API_PATHS.productService}/products/`, product);
    // const { data } = await axios.post(`http://localhost:3000/dev/products/`, product);
    console.log('data: ', data);
    
    return data;
  } catch (error: any) {
    console.log(error.data.message);
  }
}
