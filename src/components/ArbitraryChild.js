import React from "react";
import Favorites from "./Favorites"

const ArbitraryChild = ({ count }) => {
  return (
    <div>
        {count
        ? <ArbitraryChild count={count-1} />
        : <Favorites /> }
    </div>
  );
};

export default ArbitraryChild;
