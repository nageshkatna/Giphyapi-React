import React from "react";
import Giphy from "./Giphy";

const GiphyList = ({ data, path }) => {
  return (
    <ul>
      {React.Children.toArray(
        data.map((item) => {
          return <Giphy item={item} path={path} />;
        })
      )}
    </ul>
  );
};

export default GiphyList;
