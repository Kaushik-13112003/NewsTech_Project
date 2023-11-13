export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_DATA":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };

    case "REMOVE_NEWS":
      return {
        ...state,
        hits: state.hits.filter((ele, idx) => {
          return ele.objectID !== action.payload;
        }),
      };

    case "SEARCH_NEWS":
      return {
        ...state,
        query: action.payload,
      };

    case "PREV_PAGE":
      let pageNumbers = state.page - 1;

      if (pageNumbers <= 0) {
        pageNumbers = 0;
      }
      return {
        ...state,
        page: pageNumbers,
      };

    case "NEXT_PAGE":
      let pageNumber = state.page + 1;
      if (pageNumber >= state.nbPages) {
        pageNumber = 0;
      }

      return {
        ...state,
        page: pageNumber,
      };
    // return state;

    default:
      return state;
  }
};
