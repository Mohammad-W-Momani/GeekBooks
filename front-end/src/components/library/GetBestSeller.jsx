import React, { useEffect, useState } from "react";
import axios from "axios";

const GetBestSeller = (props) => {
  const [books, setBooks] = useState([]);

  // const fetchData = async () => {
  //   const API_key = "VOrS7sOXri57c2gy01Qd5ss9C6r8x9AA";

    // await axios
    //   .get(
    //     `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${props.listName}&api-key=${API_key}`
    //   )
    //   .then((data) => {
    //     console.log(data.data.results);
    //     setBooks(...data.data.results);
    //     console.log(books);
        // console.log(books[0].book_details);
        // const bookArr = data.data.results;
        // const booksIsbn = bookArr.forEach((book) => {
        //   // console.log(book.isbns[0].isbn13);
        //   const isbn = book.isbns[0].isbn13;
        //   axios
        //     .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        //     .then((response) => {
        //       // console.log(response);
        //     });
        // });
  //     });
  // };
  // const fetchDataGoogle = () => {
  //   console.log(books);
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };

  useEffect(() => {
    // fetchData();
    // fetchDataGoogle();
  }, []);

  return <div></div>;
};

export default GetBestSeller;
