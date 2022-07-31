import axios from "axios";

export async function editUser(token) {
    try {
      const URL = `${process.env.REACT_APP_API_HOST}/users`;
      const result = await axios.patch(URL, { headers: { Authorization: `Bearer ${token}` } });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
export async function GetUser(token) {
    try {
      const URL = `${process.env.REACT_APP_API_HOST}/users/profile-detail`;
      const results = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
      return results;
    } catch (error) {
      console.log(error);
    }
  }