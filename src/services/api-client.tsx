import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6b987aefa7a046f6992b7205c106b9ec",
  },
});
