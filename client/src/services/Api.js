import axios from "axios";

var Token = localStorage.getItem("token");

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};
