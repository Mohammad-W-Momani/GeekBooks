import React, { useState } from "react";
import GetBooks from "./GetBooks";
// import GetBestSeller from "./GetBestSeller";

const Library = () => {
  return (
    <div>
      <h1>Our Library Here</h1>
      <GetBooks listName="Social Sciences" />
      <GetBooks listName="Fiction" />
      <GetBooks listName="Political Science" />
      <GetBooks listName="Study Psychology" />
      <GetBooks listName="Business" />
      <GetBooks listName="Computers and Technology" />
      <GetBooks listName="Accounting and Banking" />
      <GetBooks listName="Fine Arts" />
      <GetBooks listName="Leading law" />
      <GetBooks listName="Foreign language" />
      <GetBooks listName="Psychology" />
      {/* <GetBestSeller listName={"hardcover-fiction"} />
      <GetBestSeller listName={"travel"} /> */}
    </div>
  );
};

export default Library;
