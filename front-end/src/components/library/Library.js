import React from "react";
import GetBooks from "./GetBooks";
import catRequests from "./catRequests";
import GetBestSeller from "./GetBestSeller";
import nytRequests from "./nytRequests";

const Library = () => {
  return (
    <div>
      <h1>Our Library Here</h1>
      <GetBooks listName="Social Sciences" />
      <GetBooks listName="Fiction" />
      <GetBestSeller listName={"hardcover-fiction"} />
      <GetBestSeller listName={"travel"} />
    </div>
  );
};

export default Library;
