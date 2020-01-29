import React, { useState } from "react";
import "./App.scss";
import FoxPictures from "./components/FoxPictures"
import ArbitraryChild from "./components/ArbitraryChild"

function App() {
  const [foxImages, setFoxImages] = useState([]);

  return (
    <div className="App">
      <FoxPictures 
        foxImages={foxImages}
        setFoxImages={setFoxImages}
      />
      <ArbitraryChild
        count={5}
      />
    </div>
  );
}

export default App;
