import React from "react";

const FoxCard = ({ image }) => {
  return (
    <article className="card">
      <img src={image} alt="" />
    </article>
  );
};

export default FoxCard;
