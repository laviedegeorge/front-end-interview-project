import React from "react";
import { Menu, Inbox } from "react-feather";

const Header = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <header
        style={{ backgroundColor: "#121212" }}
        className=" flex justify-between items-center text-white px-4 py-2"
      >
        <nav className="hidden lg:block">
          <ul className=" flex text-sm font-light">
            <li className="">Stores</li>
            <li className="ml-4">Contact Us</li>
          </ul>
        </nav>
        <i
          className="lg:hidden cursor-pointer"
          onClick={() => setState(!state)}
        >
          <Menu />
        </i>

        <p className="text-2xl font-bold">FOXTROT</p>
        <i>
          <Inbox />
        </i>
      </header>

      {/* ====== MOBILE NAV ========= */}
      <nav
        style={{
          backgroundColor: "#121212",
          height: "calc(100vh - 48px)",
          top: "48px",
        }}
        className={`${
          state ? "block" : "hidden"
        } w-screen text-white text-sm font-light absolute left-0 p-4`}
      >
        <ul className="block">
          <li className="py-2">Stores</li>
          <li className="py-2">Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
