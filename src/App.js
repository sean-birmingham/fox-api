import React, { useState } from "react";
import "./App.scss";
import FoxPictures from "./components/FoxPictures"
import ArbitraryChild from "./components/ArbitraryChild"
import { FoxContext } from "./contexts/FoxContext";

function App() {
  const [foxImages, setFoxImages] = useState([]);
  

  return (
    <FoxContext.Provider value={{foxImages, setFoxImages}}>
      <div className="App">
        <FoxPictures 
          foxImages={foxImages}
          setFoxImages={setFoxImages}
        />
        <ArbitraryChild
          count={5}
        />
      </div>
    </FoxContext.Provider>
  );
}

export default App;
