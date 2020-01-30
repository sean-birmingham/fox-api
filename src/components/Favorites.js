import React, {useContext} from "react";
import {FoxContext} from "../contexts/FoxContext"
import FoxCard from "../components/FoxCard"

const Favorites = () => {
    const {foxImages, setFoxImages} = useContext(FoxContext)
  return (
    <>
        <h3>Favorites</h3> 
        <div className="grid">
            
            {foxImages.filter( image => image.favorite )
            .map( image => 
                <FoxCard key={image.imageurl} image={image} setFoxImages={setFoxImages} />
            )}
            
        </div>
    </>
  );
};

export default Favorites;
