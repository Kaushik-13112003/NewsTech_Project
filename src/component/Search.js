import React from "react";
import { useGlogalContext } from "../context/context";

const Search = () => {
  const { query, handleSearch } = useGlogalContext();
  return (
    <>
      <div className="container centerItems">
        <h3 className="text-center m-3">NewsTech</h3>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search News"
              value={query}
              className="form-control"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
