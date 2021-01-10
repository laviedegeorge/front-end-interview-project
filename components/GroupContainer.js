import React from "react";
import ItemCard from "./ItemCard";

const GroupContainer = ({ group }) => {
  const { name, products } = group;
  return (
    <section className="my-6 px-4 lg:px-0">
      <h2 className=" font-bold text-2xl py-4">{name}</h2>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => {
          return <ItemCard key={product.id} itemData={product} />;
        })}
      </div>
    </section>
  );
};

export default GroupContainer;
