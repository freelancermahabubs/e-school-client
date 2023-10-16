import React from "react";
import {BsPeopleFill} from "react-icons/bs";
import {FaKey} from "react-icons/fa";
function TeacherLoginPanel() {
  return (
    <div className=" my-24">
      <h1 className="text-2xl  text-center">
        শিক্ষক <span className="text-[#FF5722]">লগইন</span> প্যানেল
      </h1>

      <div className="flex justify-center">
        <form>
          <div className="">
            <div className="bg-[#FF7F0C] rounded-full p-4 w-14 relative top-14 right-4">
              <BsPeopleFill className="text-white" size={25} />
            </div>

            <input
              className="border text-center pl-2 bg-[#FFFFFF] shadow-md  p-4 rounded-full"
              type="text"
              name="uname"
              placeholder="User Name"
            />
          </div>

          <div  >
            <div className="bg-[#FF7F0C] rounded-full p-4 w-14 relative top-14 right-4">
              <FaKey className="text-white" size={25} />
            </div>
            <div className="">
              <input
                className="border text-center bg-[#FFFFFF] shadow-md p-4 rounded-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center my-2 ">
            <button
              type="submit"
              className="bg-[#4C9A0B]  border-4 border-[#fffff] rounded-full p-3 text-xl font-semibold shadow-xl">
              Login
            </button>
          </div>

          <p id="error" className="text-red font-bold text-sm mt-5"></p>
        </form>
      </div>
    </div>
  );
}

export default TeacherLoginPanel;
