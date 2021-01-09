import React from "react";
import ItemCard from "./ItemCard";

const GroupContainer = () => {
  return (
    <section className="my-6 px-4 lg:px-0">
      <h2 className=" font-bold text-2xl py-4">Group name</h2>
      <div className="flex flex-wrap justify-between">
        <ItemCard imgUrl="#" name="Lorem ipsum dolor sit amet" price={3.5} />
        <ItemCard imgUrl="#" name="Lorem ipsum dolor sit amet" price={3.5} />
        <ItemCard imgUrl="#" name="Lorem ipsum dolor sit amet" price={3.5} />
        <ItemCard imgUrl="#" name="Lorem ipsum dolor sit amet" price={3.5} />
      </div>
    </section>
  );
};

export default GroupContainer;
