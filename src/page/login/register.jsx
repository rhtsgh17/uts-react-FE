/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useNavigate } from "react-router-dom";
// import Register from "./login";
// import { InputCustom } from "../../module";
// import Input from "../../module/input";
// import { useNavigate } from "react-router-dom";
// import Button from "../../komponen/button";
export default function Register() {
    let navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const handleChange = (e) => {
        // eslint-disable-next-line no-undef
        setPayload((payload) => {
            return {
                ...payload,
                [e.target.name]: e.target.value,
            };
        });
    };

    // const handleClick = (e) => {

    // }

  return (
   
    <div className="w-full mx-auto h-screen  flex flex-col p-5 justify-center items-center bg-gray-400">
      <div className="bg-[#84cc16] w-[700px] p-10 rounded">
        <h1 className="text-xl  text-[#84cc16] font-semibold">
          increative Brand
        </h1>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2 ">
            <h1 className="text-xl font-bold mb-3 text-center">Register</h1>
          </div>
          <div className="w-full flex flex-col">
          <input
              type="userName"
              placeholder="userName"
              className="w-full text-black py-3 my-3 bg-transparant  rounded-md p-4 border-b border-yellow outline-none focus:outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full text-black py-3 my-3 bg-transparant  rounded-md p-4 border-b border-yellow outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="psssword"
              className="w-full text-black py-3 my-3 bg-transparant  rounded-md p-4 border-b border-yellow outline-none focus:outline-none"
            />
            <input
              type="passwordConfirm"
              placeholder="pssswordConfirm"
              className="w-full text-black py-3 my-3 bg-transparant  rounded-md p-4 border-b border-yellow outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#262626] rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#262626]">
            Dont have'an Account?
            <button className="font-semibold underline underline-offset-2" onClick={() => {
                return navigate("/login")
            }}>
            Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
