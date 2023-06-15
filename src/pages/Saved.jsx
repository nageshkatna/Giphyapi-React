import React from "react";
import "../styles/SavedPage.css";
import GiphyList from "../components/GiphyList";
import { useNavigate } from "react-router-dom";
import useSavedGifContext from "../hooks/useSavedGifContext";
import { useLocation } from "react-router-dom";

const Saved = () => {
  const { savedGif } = useSavedGifContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="save-header">
        <button
          className="back-arrow"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa-solid fa-arrow-left fa-lg"></i>
        </button>
        <h3>My Saved GIFS</h3>
      </div>
      <div className="gif-list">
        <GiphyList
          data={savedGif}
          path={location.pathname === "/saved" && true}
        />
      </div>
    </div>
  );
};

export default Saved;
