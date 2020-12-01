import React from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";

const Library = () => {
  const [books, setbooks] = useState([]);
  const [searchBox, setsearchBox] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setsearchBox(e.target.value);
  };

  return (
    <div>
      <p>hello from library</p>
      <SearchInput handleSearch={handleSearch} />
    </div>
  );
};

export default Library;
