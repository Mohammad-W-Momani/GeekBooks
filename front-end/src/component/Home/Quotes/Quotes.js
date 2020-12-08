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
    setTimeout(getQuote.bind(), 30000);
  };

  return (
//     <div class="container">
//     <blockquote class="quote-box">
//       <p class="quotation-mark">
//         “
//       </p>
//       <p class="quote-text">
//       {quote} 
//       </p>
//       <hr/>
//       <div class="blog-post-actions">
//         <p class="d-flex blog-post-bottom pull-left">
//         {author}
//         <p class="blog-post-bottom pull-right">
//           <span class="badge quote-badge">896</span>  ❤
//         </p>
//         </p>
        
//       </div>
//     </blockquote>
// </div>
    <div className="quote-box">
      <div className="quote">
        <div className="text">
          <p>{quote}</p>
          <div className="author">
            <p>{author}</p>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="new-quote">
            New Quote
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Quotes;
