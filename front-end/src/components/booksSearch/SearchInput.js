import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <form action="" onSubmit={props.searchBook}>
        <input type="text" onChange={props.handleSearch} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
