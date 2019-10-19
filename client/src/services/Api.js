import axios from "axios";

var Token = localStorage.getItem("token");

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_APIBASEURL,
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};
