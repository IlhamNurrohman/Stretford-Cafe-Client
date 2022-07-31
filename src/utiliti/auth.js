import axios from "axios";

  export async function loginUser(body) {
    return axios.post(`${process.env.REACT_APP_API_HOST}/auth`, body)
  }