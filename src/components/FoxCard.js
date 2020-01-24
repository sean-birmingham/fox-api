import React from "react";
import "../App.scss";

const FoxCard = ({ image }) => {
  return (
    <article className="card">
      <img src={image} alt="" />
    </article>
  );
};

export default FoxCard;
