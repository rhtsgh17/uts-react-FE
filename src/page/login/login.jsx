/* eslint-disable react/jsx-no-undef */
import React from "react";
// import { InputCustom } from "../../module";
// import Input from "../../module/input";
import { useNavigate } from "react-router-dom";
import alam from "../../assets/image/alam.jpeg";
// import green from "../../assets/image/green.jpg"
// import Button from "../../komponen/button";
export default function Login() {
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
  return (
   
    <div className="w-full mx-auto h-screen  flex p-5 justify-center items-center bg-[#065f46]">
      <div className="bg-white w-3/5 h-full">
        <img className="w-full h-full" src={alam} alt="" />
      </div>
      <div className="bg-[#065f46] w-[700px] p-10 rounded h-full">
        <div className="w-full flex flex-col justify-center align-items-center mt-28">
          <div className="w-full flex flex-col mb-2 ">
            <h1 className="text-4xl font-bold mb-3 text-white">Login</h1>
            <p className="text-sm mb-2 text-white">
            Selamat datang kembali | Silakan masukkan detail Anda
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="emailAddress"
              placeholder="emailAddress"
              className="w-full text-black py-3 my-3 bg-transparent  rounded-md p-4 border border-white outline-none focus:outline-none font-bold"
            />
            <input
              type="password"
              placeholder="psssword"
              className="w-full text-black py-3 my-3 bg-transparent  rounded-md p-4 border border-white outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="w-full text-2xl text-white my-2 font-bold bg-[#fcb91c] rounded-md p-4 text-center flex items-center justify-center" onClick={() => {
                return navigate("/halaman")}}>
              Login
            </button>
          </div>
        </div>
        
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-white">
            Dont have'an Account?
            <button className="font-semibold underline underline-offset-2 text-blue-500" onClick={() => {
                return navigate("/register")
            }}>
              Sign up or free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}


