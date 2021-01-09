import React from "react";
import { Link, Instagram, Twitter, Facebook, Mail } from "react-feather";

const Socials = ({ children }) => {
  return (
    <li className=" bg-white rounded-full p-2 mx-2">
      <i>{children}</i>
    </li>
  );
};

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#121212" }}
      className=" flex flex-col justify-center items-center text-white p-4"
    >
      <ul className="flex">
        <Socials>
          <Link stroke="#000000" />
        </Socials>
        <Socials>
          <Instagram stroke="#000000" />
        </Socials>
        <Socials>
          <Twitter stroke="#000000" />
        </Socials>
        <Socials>
          <Facebook stroke="#000000" />
        </Socials>
        <Socials>
          <Mail stroke="#000000" />
        </Socials>
      </ul>
      <ul className="flex text-sm mt-3">
        <li>Terms of Service</li>
        <li className="ml-4">Privacy</li>
      </ul>
    </footer>
  );
};

export default Footer;
