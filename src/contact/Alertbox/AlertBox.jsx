import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AlertBox = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/user/${id}`)
      .then(() => {
        navigate("/delete");
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        alert("Failed to delete user!");
      });
  };

  return (
    <div className="h-auto max-w-[280px] md:max-w-[500px] flex justify-center gap-6 items-center m-auto">
      <div className="flex flex-col items-center justify-center gap-5 p-6 md:p-10 lg:p-14 shadow-neumorphic bg-[#f0f5f7] m-auto mt-10 rounded-lg">
        <p className="text-lg font-semibold text-[#4478fc]">
          Are you sure you want to delete this data?
        </p>
        <div className="flex gap-5">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            onClick={() => navigate("/delete")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
