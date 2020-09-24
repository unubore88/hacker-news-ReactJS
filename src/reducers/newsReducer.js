const initialState = {
  newsList: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return { ...state, newsList: getOnlyNews(action.payload) };
    case "SEARCH_NEWS":
      return { ...state, newsList: getOnlyNews(action.payload) };
    case "SEARCH_NEWS_BY_DATE":
      return { ...state, newsList: getOnlyNews(action.payload) };
    default:
      return state;
  }
};

const getOnlyNews = (news) => {
  return {
    hits: news.data.hits,
    nbPage: news.data.nbPages,
  };
};

export default newsReducer;
