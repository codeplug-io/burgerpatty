import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerpatty-3cb59.firebaseio.com/"
});

export default instance;
