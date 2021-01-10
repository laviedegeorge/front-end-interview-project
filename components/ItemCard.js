import React from "react";
import propTypes from "prop-types";

const ItemCard = ({ itemData }) => {
  const { title, unitPrice, assets } = itemData;
  const imgUrl = assets[0].url;
  return (
    <div
      style={{ width: "150px", height: "220px" }}
      className="hover:shadow-md rounded-md my-4"
    >
      <img
        src={imgUrl}
        className=" bg-gray-400 rounded-t-md"
        style={{ width: "150px", height: "150px" }}
      />
      <div className="flex flex-col justify-between p-2">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gray-400">{`$${unitPrice}`}</p>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default ItemCard;
