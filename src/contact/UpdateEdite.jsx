import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Input.css";

function UpdateEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [persons, setPersons] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:7000/user/${id}`)
      .then((res) => setPersons(res.data))
      .catch((err) => console.log("Error fetching user data:", err));
  }, [id]);

  const insert = () => {
    axios
      .put(`http://localhost:7000/user/${id}`, persons)
      .then(() => navigate("/update"))
      .catch((err) => console.log("Update failed", err));
  };

  return (
    <div className="h-auto max-w-[370px] md:max-w-[500px] flex justify-center items-center m-auto">
      <div className="flex flex-col gap-6 items-center justify-center p-6 md:p-10 lg:p-14 shadow-neumorphic bg-[#00aae2] m-auto mt-10 rounded-lg">
        <input
          type="text"
          placeholder="Enter your Name"
          value={persons.name || ""}
          onChange={(e) => setPersons({ ...persons, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={persons.email || ""}
          onChange={(e) => setPersons({ ...persons, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter your Phone"
          value={persons.phone || ""}
          onChange={(e) => setPersons({ ...persons, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter your Education"
          value={persons.education || ""}
          onChange={(e) =>
            setPersons({ ...persons, education: e.target.value })
          }
        />
        <button
          onClick={insert}
          className="px-8 py-2 bg-[#5069fa] border-1 rounded-[14px] font-serif font-bold text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateEdit;
