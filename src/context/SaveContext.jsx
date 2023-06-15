import { createContext, useReducer } from "react";

export const SaveContext = createContext();

export const saveGifReducer = (prevState, action) => {
  let array;
  switch (action.type) {
    case "save":
      array = prevState.savedGif;
      if (array.includes(action.payload)) return prevState;
      array.push(action.payload);
      return { savedGif: array };
    case "delete":
      array = prevState.savedGif;
      var newArr = array.filter((item) => item.id !== action.payload);
      return { savedGif: newArr };
    default:
      return prevState;
  }
};

export const SaveContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(saveGifReducer, {
    savedGif: [],
  });

  return (
    <SaveContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SaveContext.Provider>
  );
};
