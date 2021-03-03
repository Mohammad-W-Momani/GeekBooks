import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  },[]);

  const getQuote = async () => {
    const res = await fetch(`https://type.fit/api/quotes`);
    const data = await res.json();
    let randomNum = Math.floor(Math.random() * data.length);
    let randomQuote = data[randomNum];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
    setTimeout(getQuote.bind(), 60000);
  };

  return (
    <div className="quote-box">
      <div className="quote">
        <div className="text">
          <p>{quote}</p>
          <div className="author">
            <p>{author}</p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Quotes;

