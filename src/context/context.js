// http://hn.algolia.com/api/v1/search?query=...
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

//API
// const API = "http://hn.algolia.com/api/v1/search?query=html";
const API = `${process.env.REACT_APP_API}`;

const AppContext = createContext();

let initialState = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchAPI = async (api) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const res = await fetch(api);

      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_DATA",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_NEWS",
      payload: id,
    });
  };

  const handleSearch = (query) => {
    dispatch({ type: "SEARCH_NEWS", payload: query });
  };

  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      fetchAPI(`${API}query=${state.query}&page=${state.page}`);
    }, 600);

    return () => clearTimeout(timeOut);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleRemove, handleSearch, prevPage, nextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlogalContext = () => {
  return useContext(AppContext);
};

export { useGlogalContext, AppProvider };
