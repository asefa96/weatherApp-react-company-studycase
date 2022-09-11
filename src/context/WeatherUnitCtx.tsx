import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

function ThemeContextProvider(props: any) {
  const [state, setState] = useState({ unit: "C" });

  const toggleUnit = () => {
    state.unit == "C" ? setState({ unit: "F" }) : setState({ unit: "C" });
  };

  return (
    <ThemeContext.Provider value={[state, toggleUnit]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
