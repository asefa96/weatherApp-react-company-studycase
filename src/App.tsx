import React, { useEffect } from "react";
import Weather from "./components/Weather";
import ThemeContextProvider from "./context/WeatherUnitCtx";

function App() {
  return (
    <>
      <div className="App">
        <ThemeContextProvider>
          <Weather />
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
