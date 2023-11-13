import React from "react";
import Search from "./component/Search";
import "./App.css";
import Pagination from "./component/Pagination";
import Strories from "./component/Strories";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Strories />
    </>
  );
};

export default App;
