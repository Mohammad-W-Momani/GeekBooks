import React, { useEffect, useState } from "react";
import axios from "axios";

const GetBestSeller = (props) => {
  const [books, setBooks] = useState([]);

  const fetchData = () => {
    const API_key = "VOrS7sOXri57c2gy01Qd5ss9C6r8x9AA";

    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${props.listName}&api-key=${API_key}`
      )
      .then((data) => {
        console.log(data);
        const bookArr = data.data.results;
        const booksIsbn = bookArr.forEach((book) => {
          // console.log(book.isbns[0].isbn13);
          const isbn = book.isbns[0].isbn13;
          axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then((response) => {
              // console.log(response);
            });
        });
      });
  };
  // const fetchDataGoogle = () => {
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default GetBestSeller;
