import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchNewsAction,
  searchNewsByDate,
  fetchNewsAction,
} from "../actions/ApiNewsAction";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  let nbPage = news.newsList.nbPage;

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  const onClickPreviousPage = () => {
    setPage(page - 1);
    dispatch(searchNewsAction(searchInput, page));
  };

  const onClickNextPage = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 200);

    dispatch(searchNewsAction(searchInput, page));
    console.log(page);
  };

  const onSelectSearch = (e) => {
    if (e.target.value === "pertinence") {
      console.log(e.target.value);
      setPage(0);
      dispatch(fetchNewsAction());
    } else if (e.target.value === "date") {
      console.log(e.target.value);
      setPage(0);
      dispatch(searchNewsByDate(searchInput, page));
    }
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(searchNewsAction(searchInput));
  };

  return (
    <div className="search-bar">
      {console.log(page)}
      <h1>Hacker news</h1>
      <form onSubmit={onSubmitSearch}>
        <input onChange={onChangeSearch} type="text" value={searchInput} />
        <button type="submit">Rechercher</button>
        <select onChange={onSelectSearch}>
          <option value="pertinence">sort by pertinence</option>
          <option value="date">sort by date</option>
        </select>
      </form>
      <div>
        <button
          disabled={page <= 0 ? true : false}
          onClick={() => onClickPreviousPage()}
        >
          previous page
        </button>
        <button
          disabled={page >= nbPage ? true : false}
          onClick={() => onClickNextPage()}
        >
          next page
        </button>
        <p className="search-bar-page-info">
          page {page + 1} / {nbPage}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
