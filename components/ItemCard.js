import React from "react";
import propTypes from "prop-types";

const ItemCard = ({ itemData }) => {
  const { title, unitPrice, assets } = itemData;
  const imgUrl = assets[0].url;
  return (
    <div
      style={{ maxWidth: "200px", minHeight: "220px" }}
      className=" flex flex-col hover:shadow-md border rounded-md my-4"
    >
      <img
        src={imgUrl}
        className="w-full bg-gray-400 rounded-t-md"
        style={{ height: "150px" }}
      />
      <div className="flex flex-col justify-between  flex-grow p-2">
        <p className="text-sm ">{title}</p>
        <p className="text-sm text-gray-400">{`$${unitPrice}`}</p>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  itemData: propTypes.object.isRequired,
};

export default ItemCard;
