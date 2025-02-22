import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImProfile } from "react-icons/im";

const SingleVeiw = () => {
  const { id } = useParams();
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios(`http://localhost:7000/user/${id}`)
      .then((res) => setPersons(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <div className="h-auto max-w-[370px] md:max-w-[500px] flex justify-center items-center m-auto">
        <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-14 shadow-neumorphic bg-[#00aae2] m-auto mt-10 rounded-lg">
          <div className="w-[200px] text-center font-bold text-[#1f1a1b] flex items-center justify-center gap-2 bg-[#f4f4f5] p-2 rounded-3xl border-[1px] border-blue-950 relative  mb-[10px]">
            User Profile Card
            <ImProfile />
          </div>
          <div className="flex justify-around gap-10">
            <div className="flex flex-col font-bold font-serif gap-5">
              <span>Id</span>
              <span>Name</span>
              <span>Email</span>
              <span>Phone</span>
              <span>Education</span>
            </div>
            <div className="flex flex-col font-bold font-sans gap-5">
              <span>{id}</span>
              <span>{persons.name}</span>
              <span>{persons.email}</span>
              <span>{persons.phone}</span>
              <span>{persons.education}</span>
            </div>
          </div>

          <Link
            to="/view"
            className="px-2 py-2 bg-[#21163a] w-[90px] mt-[10px] text-center text-white font-bold rounded-2xl"
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
};
export default SingleVeiw;
