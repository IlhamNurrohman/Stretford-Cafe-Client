import axios from "axios";

export async function getProduct(categories, search, page = 1) {
  try {
    const URL = `${process.env.REACT_APP_API_HOST}/products?categories=${categories}&page=${page}&limit=12&name${search}`;
    const result = await axios.get(URL);
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function getSearch(search) {
  try {
    const URL = `${process.env.REACT_APP_API_HOST}/products?=${search}&page=1&limit=12`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export async function getFavorite() {
  try {
    const URL = `${process.env.REACT_APP_API_HOST}/products/favorite`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllProduct() {
  try {
    const URL = `${process.env.REACT_APP_API_HOST}/products?page=1&limit=12`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export const getProductDetail = async (id) => {
  try {
    const URL = `${process.env.REACT_APP_API_HOST}/products/detail/${id}`;
    const results = await axios.get(URL);
    //console.log(results)
    return results;
  } catch (error) {
    console.log(error);
  }
};