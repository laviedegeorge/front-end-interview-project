import React from "react";
import propTypes from "prop-types";

const ItemCard = ({ imgUrl, name, price }) => {
  return (
    <div
      style={{ width: "150px", height: "220px" }}
      className="hover:shadow-md"
    >
      <img
        src={imgUrl}
        className=" bg-gray-400"
        style={{ width: "150px", height: "150px" }}
      />
      <p className="text-sm">{name}</p>
      <p className="text-sm text-gray-400">{`$${price}`}</p>
    </div>
  );
};

ItemCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default ItemCard;
