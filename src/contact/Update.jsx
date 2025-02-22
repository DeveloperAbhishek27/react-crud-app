import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

function Update() {
  const [persons, setPersons] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:7000/user")
      .then((res) => {
        setPersons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 flex flex-wrap gap-4">
      {persons.map((person) => (
        <div
          key={person.id}
          className="flex flex-col gap-4 justify-between items-center border p-4 rounded-lg shadow-md bg-gray-100"
        >
          <div className="flex justify-between gap-6 w-[200px] overflow-hidden">
            <div className="flex flex-col gap-2 text-gray-600 font-semibold">
              <span>Name:</span>
              <span>Email:</span>
              <span>Mobile:</span>
              <span>Education:</span>
            </div>
            <div className="flex flex-col gap-2 text-gray-800 font-bold">
              <span>{person.name}</span>
              <span>{person.email}</span>
              <span>{person.phone}</span>
              <span>{person.education}</span>
            </div>
          </div>
          <Link
            to={`/person/${person.id}`}
            className="px-14 py-2 bg-[#00aae2] text-white font-bold rounded-md flex items-center gap"
          >
            <MdEdit />
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Update;
