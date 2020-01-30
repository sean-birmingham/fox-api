import React, { useContext } from "react";
import {FoxContext} from "../contexts/FoxContext"

const FoxCard = ({ image }) => {
  const {foxImages, setFoxImages } = useContext(FoxContext)
  const toggleFavorite = image => {
    console.log("toggling", image)
    if (image.favorite) {
      image.favorite = false
    } else {
      image.favorite = true
    }
    setFoxImages(foxImages.map(item => {
      if (image.imageurl === item.imageurl ) {
        return image;
      }
      return item;
    }))
  }

  return (
    <article className="card">
      <img src={image.imageurl} alt="" />
      <button className={image.favorite ? "faved" : ""}onClick={_ => toggleFavorite(image) }>Toggle Favorite</button>
    </article>
  );
};

export default FoxCard;
