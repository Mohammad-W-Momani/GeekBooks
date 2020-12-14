import axios from "axios";

const NYT = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists.json?list-name=",
});

export default NYT;
