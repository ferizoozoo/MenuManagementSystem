import axios from "axios";

const url = "";

export const getCooks = () => {
  let response = axios.get(url);
  return response.data;
};
