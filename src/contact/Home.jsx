import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    axios
      .get("https://assets9.lottiefiles.com/packages/lf20_touohxv0.json")
      .then((res) => setAnimationData(res.data))
      .catch((err) => console.log("error", err));
  }, []);

  const insert = () => {
    navigate("/insert");
  };

  return (
    <div className="flex flex-col items-center justify-center w-[250px] sm:w-[250px] md:w-[300px] lg:w-[450px] m-auto">
      <Lottie animationData={animationData} className="w-64 h-64" />
      <h1 className="text-3xl font-bold mt-4 text-center">
        Manage Your Data Easily!
      </h1>
      <div className="flex flex-col">
        <p className="mt-2 text-gray-600 text-center">
          Add, edit, and delete records in one place.
        </p>
        <button
          className="mt-4 bg-[#00aae2] text-white px-6 py-2 rounded-lg"
          onClick={insert}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
