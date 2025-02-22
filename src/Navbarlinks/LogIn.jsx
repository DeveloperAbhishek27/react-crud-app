import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

const LogIn = () => {
  return (
    <>
      <form>
        <div className="mt-6 flex justify-center items-center max-w-[320px] m-auto md:max-w-[500px]">
          <div className="flex flex-col items-center justify-center m-auto mt-10 p-6 md:p-10 lg:p-14 relative w-[90%] max-w-sm shadow-neumorphic bg-[#f4f4f5] rounded-lg">
            <Link
              to="/"
              className="absolute top-6 right-[6%] p-2 rounded-neumorphic shadow-neumorphic bg-[#f4f4f5]"
            >
              <IoCloseSharp className="text-[24px] font-bold text-[#e21a00]" />
            </Link>

            <div className="flex items-center justify-center gap-5">
              <Link to="/" className="flex gap-2 items-center">
                <img
                  src="./logo.png"
                  alt="logo"
                  className="bg-transparent h-[50px] w-[60px] rounded-full shadow-neumorphic bg-[#f4f4f5]"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center p-4">
              <input
                type="email"
                placeholder="Email ID"
                className="  border-[1px] border-[#00aae2]"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className=" border-[1px] border-[#00aae2]"
              />
              <button
                type="submit"
                className="px-8 py-2 rounded-neumorphic text-white shadow-neumorphic bg-[#00aae2] border-[1px] border-[#1dc7ff]  font-serif font-bold"
              >
                Log IN
              </button>
            </div>
            <div className="flex items-center justify-center  mt-4 gap-5 flex-wrap">
              <Link
                to="https://www.facebook.com/"
                className="px-3 py-2 rounded-neumorphic shadow-neumorphic flex items-center bg-[#325fb4] border-1  font-serif font-bold text-white"
              >
                <FaFacebookF />
                acebook
              </Link>
              <Link
                to="https://google.com/"
                className="px-3 py-2 rounded-neumorphic shadow-neumorphic bg-[#f4f4f5] border-1 flex items-center  font-serif font-bold "
              >
                <IoLogoGoogle className="text-[#4285F4]" />
                <span className="text-[#EA4335]">o</span>{" "}
                <span className="text-[#FBBC05]">o</span>{" "}
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LogIn;
