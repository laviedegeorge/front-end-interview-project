import React from "react";
import propTypes from "prop-types";

const Hero = ({ data }) => {
  const { imgUrl, header, text } = data;
  return (
    <section className=" w-full block lg:flex lg:my-8 ">
      <img src={imgUrl} className=" w-full bg-black" />
      <div className=" flex flex-col justify-center p-4">
        <h1 className=" text-3xl font-bold">{header}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

Hero.propTypes = {
  imgUrl: propTypes.string.isRequired,
  header: propTypes.string,
  text: propTypes.string,
};

export default Hero;
