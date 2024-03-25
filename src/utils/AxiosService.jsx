import axios from "axios";

let AxiosService = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;
