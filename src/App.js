import React, { useState } from "react";
import "./App.scss";
import FoxPictures from "./components/FoxPictures"
import ArbitraryChild from "./components/ArbitraryChild"
import FoxContext from "./contexts/FoxContext";

function App() {
  const [foxImages, setFoxImages] = useState([]);
  const [favFoxes, setFavFoxes] = useState([])

  const addFavFox = foxImage => {
    setFavFoxes([...favFoxes, foxImage])
  }

  return (
    <FoxContext.Provider value={{ foxImages, setFoxImages, addFavFox }}>
      <div className="App">
        <FoxPictures
        />
        <ArbitraryChild
          count={5}
        />
      </div>
    </FoxContext.Provider>
  );
}

export default App;
