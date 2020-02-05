import React, { useEffect, useContext } from "react";
import axios from "axios";
import useDarkMode from "../hooks/useDarkMode";
import FoxCard from "./FoxCard";
import FoxContext from "../contexts/FoxContext";

function FoxPictures() {

  const [toggleMode] = useDarkMode("darkMode", false);
  const { foxImages, setFoxImages, addFavFox } = useContext(FoxContext);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
      .then(response => {
        console.log(response);
        setFoxImages([...foxImages, response.data.image]);
      });
  };

  return (
    <>
      <nav>
        <button onClick={getImage}>New Fox</button>
        <button onClick={toggleMode}>Toggle Mode</button>
      </nav>
      <div className="grid">
        {foxImages.map(image => (
          <FoxCard key={image} image={image} addFavFox={addFavFox} />
        ))}
      </div>
    </>
  );
}

export default FoxPictures;
