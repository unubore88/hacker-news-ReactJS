import axios from "axios";

export const fetchNewsAction = () => {
  let page = 1;
  let urlRequest = `https://hn.algolia.com/api/v1/search?query=&page=${page}`;
  return function (dispatch) {
    axios.get(urlRequest).then((reponse) => {
      dispatch({ type: "FETCH_NEWS", payload: reponse });
    });
  };
};

export const searchNewsAction = (search, page = 1) => {
  let urlRequest = `https://hn.algolia.com/api/v1/search?query=${search}&page=${page}`;
  console.log(urlRequest);
  return function (dispatch) {
    axios.get(urlRequest).then((response) => {
      dispatch({ type: "SEARCH_NEWS", payload: response });
    });
  };
};

export const searchNewsByDate = (search = "", page = 1) => {
  return function (dispatch) {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?query=${search}&page=${page}`
      )
      .then((response) => {
        dispatch({ type: "SEARCH_NEWS_BY_DATE", payload: response });
      });
  };
};
