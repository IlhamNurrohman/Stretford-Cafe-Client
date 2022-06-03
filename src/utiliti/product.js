import axios from "axios";

export async function getProduct(categories) {
  try {
    const URL = `http://localhost:8000/products?categories=${categories}&page=1&limit=12`;
    const result = await axios.get(URL);
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function getSearch(find) {
  try {
    const URL = `http://localhost:8000/products?=${find}&page=1&limit=12`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export async function getFavorite() {
  try {
    const URL = `http://localhost:8000/products/favorite`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllProduct() {
  try {
    const URL = `http://localhost:8000/products?page=1&limit=12`;
    const results = await axios.get(URL);
    return results;
  } catch (error) {
    console.log(error);
  }
}

{/* <input
                                type="text"
                                className="form-control ps-5 rounded-5 bg-light"
                                id="exampleFormControlInput1"
                                placeholder="search"
                                onChange={(event) => {
                                    event.preventDefault();
                                    navigate(`/products?=${event.target.value}`);
                                }}
                            />
                            <img
                                className="position-relative bottom-50 img-search"
                                src={Search}
                                alt="search"
                            /> */}