import React from "react";
import ItemCard from "./ItemCard";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const GroupContainer = ({ group }) => {
  const { name, products, id } = group;
  return (
    <section className="my-6 px-4 lg:px-0">
      <h2 className=" font-bold text-2xl py-4">{name}</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => {
          return <ItemCard key={product.id} itemData={product} />;
        })}
      </div>
      <Link href={{ pathname: `./groups/${id}`, query: { title: name } }}>
        <button className=" w-auto hover:w-20 hover:bg-gray-300 flex items-center justify-between text-sm text-gray-500 rounded-md p-2">
          More <ArrowRight size="18" className="ml-2" />
        </button>
      </Link>
    </section>
  );
};

export default GroupContainer;
