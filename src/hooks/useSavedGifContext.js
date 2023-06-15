import { SaveContext } from "../context/SaveContext";
import { useContext } from "react";

const useSavedGifContext = () => {
  return useContext(SaveContext);
};

export default useSavedGifContext;
