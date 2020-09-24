import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsAction } from "../actions/ApiNewsAction";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);
  return (
    <div>
      {console.log(news.newsList)}
      <ul>
        {news.newsList.hits &&
          news.newsList.hits.map((item) => {
            return (
              <li className="news news-box" key={item.objectID}>
                <a className="news-title" href={item.url} target="_blank">
                  {item.title
                    ? item.title
                    : `${item.author} - ${
                        item.story_text ? item.story_text : ""
                      }`}
                  {item.url ? ` - 🔗 ` : ""}
                  <br />
                </a>
                <div className="news-info-title">
                  {item.author} -{" "}
                  {`${item.created_at.slice(0, 10)} - ${item.created_at.slice(
                    12,
                    19
                  )} - ${
                    item.url
                      ? `${item.url.substring(0, 40)}...`
                      : "url unavaible"
                  }`}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NewsList;
