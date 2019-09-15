import React, { useState, useEffect } from "react";
import youtubeData from "./data";

import "./App.css";

const Card = ({ item, channel }) => {
  return (
    <li className="card">
      <a
        href={`https://www.youtube.com/watch?v=${item.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <img src={item.image} alt={item.title} className="card-image" />
        <h4 className="card-title">{item.title}</h4>
        <p className="card-channel">
          <i>{channel}</i>
        </p>
        <div className="card-metrics">
          {item.views} &bull; {item.published}
        </div>
      </a>
    </li>
  );
};

const CardList = ({ list }) => {
  return (
    <ul className="list">
      {list.items.map((item, index) => {
        return <Card key={index} item={item} channel={list.channel} />;
      })}
    </ul>
  );
};

const App = () => {
  const [videos, setVideos] = useState([]);

  // Load this effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(youtubeData);
    }, 3000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {videos.map((list, index) => {
        return (
          <section key={index}>
            <h2 className="section-title">{list.section}</h2>
            <CardList list={list} />
            <hr />
          </section>
        );
      })}
    </div>
  );
};

export default App;
