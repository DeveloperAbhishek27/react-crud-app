import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdHome } from "react-icons/md";

function Nav() {
  return (
    <nav className="bg-[rgb(0,170,226)] flex justify-center items-center px-8 py-8 sm:py-10 rounded-r-[30px] my-[20px] h-[60vh] lg:h-[80vh]">
      <ul className="flex flex-col justify-around gap-8 sm:gap-10 h-full">
        <li className="px-1 sm:px-3 md:px-1 lg:px-20 py-2 bg-[#f4f4f5] rounded-[30px] w-[50px] sm:w-[80px] flex items-center justify-center border-none border-[#21163a] lg:border-l-[12px]">
          <NavLink
            to="/"
            className="text-[#21163a] font-bold flex items-center gap-2"
          >
            <MdHome className="text-[21px]" />
            <p className="hidden lg:block">Home</p>
          </NavLink>
        </li>
        <li className="px-1 sm:px-3 md:px-1 lg:px-20 py-2 bg-[#f4f4f5] rounded-[30px] w-[50px] sm:w-[80px] flex items-center justify-center border-none border-[#21163a] lg:border-l-[12px]">
          <NavLink
            to="/insert"
            className="text-[#21163a] font-bold flex items-center gap-2"
          >
            <IoIosAddCircleOutline className="text-[21px]" />
            <p className="hidden lg:block">Insert</p>
          </NavLink>
        </li>
        <li className="px-1 sm:px-3 md:px-1 lg:px-20 py-2 bg-[#f4f4f5] rounded-[30px] w-[50px] sm:w-[80px] flex items-center justify-center border-none border-[#21163a] lg:border-l-[12px]">
          <NavLink
            to="/view"
            className="text-[#21163a] font-bold flex items-center gap-2"
          >
            <CiViewList className="text-[21px]" />
            <p className="hidden lg:block">View</p>
          </NavLink>
        </li>
        <li className="px-1 sm:px-3 md:px-1 lg:px-20 py-2 bg-[#f4f4f5] rounded-[30px] w-[50px] sm:w-[80px] flex items-center justify-center border-none border-[#21163a] lg:border-l-[12px]">
          <NavLink
            to="/update"
            className="text-[#21163a] font-bold flex items-center gap-2"
          >
            <MdBrowserUpdated className="text-[21px]" />
            <p className="hidden lg:block">Update</p>
          </NavLink>
        </li>
        <li className="px-1 sm:px-3 md:px-1 lg:px-20 py-2 bg-[#f4f4f5] rounded-[30px] w-[50px] sm:w-[80px] flex items-center justify-center border-none border-[#21163a] lg:border-l-[12px]">
          <NavLink
            to="/delete"
            className="text-[#21163a] font-bold flex items-center gap-2"
          >
            <RiDeleteBin6Line className="text-[21px]" />
            <p className="hidden lg:block">Delete</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
