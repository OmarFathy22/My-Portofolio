import { createContext, useReducer } from "react";
const ColorContext = createContext(null);

const initialData = {
  theme: JSON.parse(localStorage.getItem("--primaryColor")) || "#69B6DD",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);
  const changeColor = (e) => {
    localStorage.setItem("--primaryColor", JSON.stringify(e.target.value));
    // @ts-ignore
    dispatch({ type: "CHANGE_COLOR", payload: e.target.value });
    document.documentElement.style.setProperty(
      "--primaryColor",
      e.target.value
    );
  };
  return (
    <ColorContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
