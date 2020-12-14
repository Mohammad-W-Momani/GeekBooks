import axios from "axios";

const google = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
});

export default google;
