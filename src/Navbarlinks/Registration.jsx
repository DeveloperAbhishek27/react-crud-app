import React from "react";

const Registration = () => {
  return (
    <>
      <>
        <div className="flex justify-center pb-7 pt-6 w-full">
          <div className="flex flex-col justify-center gap-5 p-8 border-2 border-gray-400 rounded-[10px]">
            <h1 className="text-[40px] text-blue-900 text-center ">
              RESISTRATION
            </h1>
            <div className="flex gap-10">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-blue-900">
                  First Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-gray-300 px-5 rounded-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-blue-900">
                  Last Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-gray-300 px-5 rounded-[6px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-blue-900">
                Address <span className="text-red-700">*</span>
              </p>
              <input
                type="text"
                className=" w-full sm:w-[486px] h-[33px] border-2 border-gray-300 px-5 rounded-[6px]"
              />
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-blue-900">
                  Phone <span className="text-red-500">*</span>
                </p>
                <input
                  type="number"
                  className="border-2 border-gray-300 px-5 rounded-[6px]"
                  placeholder="+91"
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-blue-900">
                  City <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-gray-300 px-5 rounded-[6px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-blue-900">
                Email <span className="text-red-700">*</span>
              </p>
              <input
                type="email"
                className=" w-full sm:w-[486px] h-[33px] border-2 border-gray-300 px-5 rounded-[6px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="px-6 py-2 border-none bg-blue-900 text-white rounded-[10px]"
                onClick={() => alert("form submited")}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Registration;
