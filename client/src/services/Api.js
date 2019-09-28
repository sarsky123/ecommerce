import axios from "axios";
import { state } from "../store/modules/authentication";

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${state.token}`
    }
  });
};
