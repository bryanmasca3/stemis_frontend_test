import axios from "axios";

const instance = axios.create({
  /*   baseURL: "http://localhost:4000/", */
  baseURL: "https://stemis-backend.onrender.com/",
});

export default instance;
