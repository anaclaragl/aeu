import axios from "axios";

const api = axios.create({
  baseURL: "https://git.heroku.com/musicnovum.git"
})

export default api;