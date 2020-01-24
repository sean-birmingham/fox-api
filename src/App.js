import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import useDarkMode from "../src/hooks/useDarkMode";
import FoxCard from "./components/FoxCard";

function App() {
  const [foxImage, setFoxImage] = useState([]);
  const [darkMode, setDarkMode, toggleMode] = useDarkMode("darkMode", false);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
      .then(response => {
        console.log(response);
        setFoxImage([...foxImage, response.data.image]);
      });
  };

  console.log(foxImage);
  return (
    <div className="App">
      <nav>
        <button onClick={getImage}>New Fox</button>
        <button onClick={toggleMode}>Toggle Mode</button>
      </nav>
      <div className="grid">
        {foxImage.map(image => (
          <FoxCard key={image} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
