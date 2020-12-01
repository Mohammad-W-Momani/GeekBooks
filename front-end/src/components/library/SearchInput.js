import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <form action="">
        <input type="text" onChange={props.handleSearch} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
