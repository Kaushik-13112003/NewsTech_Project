import React from "react";
import { useGlogalContext } from "../context/context";

const Pagination = () => {
  let { nbPages, page, prevPage, nextPage } = useGlogalContext();
  return (
    <>
      <div className="container page">
        <div>
          <button className="btn btn-primary" onClick={() => prevPage()}>
            PREV
          </button>
        </div>
        <div>
          <p>
            Page {page + 1} of {nbPages}
          </p>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => nextPage()}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
