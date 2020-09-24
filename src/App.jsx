import React from "react";
import NewsList from "./component/NewsList";
import SearchBar from "./component/SearchBar";

const App = () => {
  return (
    <div id="block-page">
      <SearchBar />
      <NewsList />
    </div>
  );
};

export default App;
