import React from "react";

const FoxCard = ({ image }) => {
  return (
    <article className="card">
      <span>
        <img src={image} alt="" />
      </span>
      <button>Add to favorites</button>
    </article>
  );
};

export default FoxCard;
