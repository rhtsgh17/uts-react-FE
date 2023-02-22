// import logo from './logo.svg';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/login/login";
import Register from "./page/login/register";
import Halaman from "./page/dashboard/halaman";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/halaman" element={<Halaman />} />
        <Route path="*" element={<Navigate to={'/login'} replace={true}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
