import axios from "axios";

const instance = axios.create({
  baseURL: 'https://themoviedock.herokuapp.com/'
});

instance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

export default instance;