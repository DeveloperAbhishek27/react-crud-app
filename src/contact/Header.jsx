import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Header() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id, title) => {
    setActive(title);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", title: "Home", path: "/" },
    { id: "login", title: "Log in", path: "/login" },
  ];

  return (
    <header className="px-8 py-3 bg-[#f4f4f5] flex justify-between gap-4 items-center w-full">
      <Link to="/" className="flex gap-2 items-center">
        <p className="font-rubik text-[#00aae2]">CRUD</p>
        <img
          src="./logo.png"
          alt="logo"
          className="bg-transparent h-[50px] w-[60px] rounded-full"
        />
        <p className="font-rubik text-[#00aae2]">OPERATOR</p>
      </Link>

      <div className="hidden sm:flex justify-around gap-8">
        <IoSearchSharp className="text-[30px] text-[rgb(0,170,226)] cursor-pointer" />
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className="flex items-center gap-2 justify-center font-bold text-[16px] px-4 py-1 bg-[rgb(0,170,226)] rounded-[4px] text-white"
          >
            {link.id === "home" && (
              <IoMdHome className="text-[21px] relative bottom-[2px]" />
            )}{" "}
            {link.title}
          </NavLink>
        ))}
      </div>

      <div className="sm:hidden flex justify-end items-center text-[#00aae2] p-3 rounded-neumorphic shadow-neumorphic bg-[#f4f4f5]">
        {toggle ? (
          <MdClose
            className=" cursor-pointer text-[16px]"
            onClick={() => setToggle(false)}
          />
        ) : (
          <FaBars
            className=" cursor-pointer text-[16px]"
            onClick={() => setToggle(true)}
          />
        )}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#a1e7ff] absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setToggle(false)}>
                <NavLink
                  to={link.path}
                  className="block text-black font-bold text-[16px] px-4 py-2 rounded-[4px] hover:bg-slate-200"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
