import React, { useState } from "react";
import "../styles/Giphy.css";
import useSavedGifContext from "../hooks/useSavedGifContext";

const Giphy = ({ item, path }) => {
  const { dispatch } = useSavedGifContext();
  const [btnClicked, setBtnClicked] = useState(false);
  const onLikeButtonClick = (item) => {
    const saveItemPayload = {
      id: item.id,
      images: {
        fixed_width: {
          url: item.images.fixed_width.url,
        },
      },
      slug: item.slug,
      title: item.title,
      username: item.username,
    };
    dispatch({ type: "save", payload: saveItemPayload });
    setBtnClicked(true);
  };

  const onDeleteButtonClick = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <li className="giphy">
      {path ? (
        <button
          className="icon-button"
          onClick={() => onDeleteButtonClick(item.id)}
        >
          <i className="fa fa-trash fa-lg"></i>
        </button>
      ) : (
        <button
          className={btnClicked ? "icon-button clicked" : "icon-button"}
          onClick={() => onLikeButtonClick(item)}
        >
          <i className="fa fa-heart fa-lg"></i>
        </button>
      )}
      <img src={item.images.fixed_width.url} alt={item.slug} />
      <div className="gif-details">
        <p>{item.title}</p>
        {item.username && <p>@{item.username}</p>}
      </div>
    </li>
  );
};

export default Giphy;
