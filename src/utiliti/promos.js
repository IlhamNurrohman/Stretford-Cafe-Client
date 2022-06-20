import axios from "axios";

export const getPromobyId = async (id) => {
    try {
      const URL = `${process.env.REACT_APP_API_HOST}/promos/detail/${id}`;
      const results = await axios.get(URL);
      //console.log(results)
      return results;
    } catch (error) {
      console.log(error);
    }
  };