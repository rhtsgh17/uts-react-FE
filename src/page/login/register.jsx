/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useNavigate } from "react-router-dom";
import jak from "../../assets/image/jak.jpg";
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
    <div className="w-full mx-auto h-screen  flex p-5 justify-center items-center bg-[#065f46]">
      <div className="bg-white w-3/5 h-full">
      <img className="w-full h-full" src={jak} alt="" />
      </div>
      <div className="bg-[#065f46] w-[700px] p-10 rounded h-full">
        <div className="w-full flex flex-col justify-center align-items-center mt-28">
          <div className="w-full flex flex-col mb-2 ">
            <h1 className="text-4xl font-bold mb-3 text-white">Register</h1>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="userName"
              placeholder="userName"
              className="w-full text-black py-3 my-3 bg-transparent  rounded-md p-4 border border-white outline-none focus:outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full text-black py-3 my-3 bg-transparent  rounded-md p-4 border border-white outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="psssword"
              className="w-full text-black py-3 my-3 bg-transparent  rounded-md p-4 border border-white outline-none focus:outline-none"
            />
           <select
              name="role"
              id="role"
              className="bg-black-500 h-10"
              onChange={handleChange}
              // value={payload.role}
            >
              role
              <option
                // typeof="enum"
                value="masyarakat"
                name={'role'}
                className="bg-black-500"
              >
                Masyarakat
              </option>
              <option
                // typeof="enum"
                value="petugas"
                name={'role'}
                className="bg-black-500"
              >
                Petugas
              </option>
            </select>
         
          </div>
          <div className="w-full flex flex-col my-4">
            <button
              className="w-full text-2xl text-white my-2 font-bold bg-[#fcb91c] rounded-md p-4 text-center flex items-center justify-center"
              // onClick={() => {
              //   return navigate("/halaman");
              // }}
            >
              Register
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-white">
            Dont have'an Account?
            <button
              className="font-bold underline underline-offset-2 text-blue-500"
              onClick={() => {
                return navigate("/login");
              }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
