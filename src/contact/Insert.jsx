import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcAddDatabase } from "react-icons/fc";

function Insert() {
  const [persons, setPersons] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });

  const navigate = useNavigate();

  const insert = (e) => {
    const notify = (message) => toast.error(message);

    e.preventDefault();

    if (persons.name === "") {
      notify("Please enter your name.");
    } else if (persons.email === "") {
      notify(" Please enter a valid email address.");
    } else if (persons.phone === "") {
      notify("Please enter your contact number.");
    } else if (persons.education === "") {
      notify(" Please enter your qualification.");
    } else {
      axios
        .post("http://localhost:7000/user", persons)
        .then(() => {
          setTimeout(() => {
            navigate("/view");
          }, 300);
        })
        .catch((err) => console.log("Insert Error:", err));
    }
  };

  return (
    <>
      <form onSubmit={insert}>
        <div className="h-auto max-w-[370px] md:max-w-[500px] flex justify-center items-center m-auto">
          <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-14 shadow-neumorphic bg-[#00aae2] m-auto mt-10 rounded-lg">
            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="flex items-center justify-between gap-2 shadow-[inset_-5px_-5px_10px_#ffffff,5px_5px_10px_rgba(0,0,0,0)] rounded-2xl px-10 py-2 bg-[#f4f4f5] text-[16px] font-bold text-green-600">
                <FcAddDatabase className="text-[28px]" /> Data
              </div>
              <input
                type="text"
                placeholder="Enter your Name"
                value={persons.name}
                onChange={(e) =>
                  setPersons({ ...persons, name: e.target.value })
                }
                className="placeholder-slate-200 w-full px-4 py-2"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                value={persons.email}
                onChange={(e) =>
                  setPersons({ ...persons, email: e.target.value })
                }
                className="placeholder-slate-200 w-full px-4 py-2"
              />
              <input
                type="number"
                placeholder="Enter your Phone"
                value={persons.phone}
                onChange={(e) =>
                  setPersons({ ...persons, phone: e.target.value })
                }
                className="placeholder-slate-200 w-full px-4 py-2"
              />
              <input
                type="text"
                placeholder="Enter your Education"
                value={persons.education}
                onChange={(e) =>
                  setPersons({ ...persons, education: e.target.value })
                }
                className="placeholder-slate-200 w-full px-4 py-2"
              />
              <button
                type="submit"
                className="px-8 py-2 bg-green-600 border-1 rounded-[14px] font-serif font-bold text-white"
              >
                Submit
              </button>
            </div>
          </div>
          <ToastContainer position="top-center" />
        </div>
      </form>
    </>
  );
}

export default Insert;
