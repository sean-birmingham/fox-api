import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [foxImage, setFoxImage] = useState("")

  useEffect(() => {
    getImage();
  }, [])

  const getImage = () => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/')
      .then(response => {
        console.log(response)
        setFoxImage(response.data)
      })
  }

  return (
    <div className="App">
      <img src={foxImage.image} alt="" />
      <button onClick={getImage}>New Fox</button>
    </div>
  );
}

export default App;
