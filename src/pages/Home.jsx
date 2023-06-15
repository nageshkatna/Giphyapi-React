import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GiphyList from "../components/GiphyList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const searchValue = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g`
    )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error while fetching the data from gify", err);
      });
  }, [query]);

  const onSearchChange = (e) => {
    searchValue.current = e.target.value;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchValue.current);
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <form className="form" onSubmit={onHandleSubmit}>
            <div className="input-icons">
              <i className="fa-solid fa-magnifying-glass icon"></i>
              <input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={(e) => onSearchChange(e)}
                className="search-box"
              />
            </div>
            <button type="submit" id="submit" className="search-button">
              Search for GIF
            </button>
          </form>
          <button
            type="submit"
            id="submit"
            className="nav-button"
            onClick={() => navigate("/saved")}
          >
            My Saved Gifs
          </button>
        </div>
        <div className="gif-list">
          <GiphyList data={data} path={false} />
        </div>
      </div>
    </>
  );
};

export default Home;
