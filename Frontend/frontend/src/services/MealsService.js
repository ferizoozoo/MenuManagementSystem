import axios from "axios";

const url = "";

export const getMeals = () => {
  let response = axios.get(url);
  return response.data;
};
