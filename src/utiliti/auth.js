import axios from "axios";

export async function editUser(token) {
    try {
      const URL = `http://localhost:8000/users`;
      const result = await axios.pacth(URL, { headers: { Authorization: `Bearer ${token}` } });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
export async function GetUser(token) {
    try {
      const URL = `http://localhost:8000/users/profile-detail`;
      const results = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } });
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  export async function loginUser(body) {
    return axios.post("http://localhost:8000/auth", body)
  }