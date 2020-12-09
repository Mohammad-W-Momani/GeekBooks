import React from "react";
import GetBooks from "./GetBooks";
import catRequests from "./catRequests";

const Library = () => {
  return (
    <div>
      <h1>Our Library Here</h1>
      <GetBooks
        category="Social Sciences"
        fetchURL={catRequests.socialSciences}
      />
      <GetBooks category="Fiction" fetchURL={catRequests.fiction} />
    </div>
  );
};

export default Library;
