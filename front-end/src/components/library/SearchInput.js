import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <form action="" onSubmit={props.searchBook}>
        <input type="text" onChange={props.handleSearch} />
        <button className={`btn btn-outline-success my-2 my-sm-0`} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
