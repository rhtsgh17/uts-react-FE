// import logo from './logo.svg';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/login/login";
import Register from "./page/login/register";
import Halaman from "./page/dashboard/halaman";
import Dashboard from "./page/dashboard/dashboard";
import Registrasi from "./page/dashboard/Registrasi";
import Pengaduan from "./page/dashboard/pengaduan";
import Respon from "./page/dashboard/Respon";
import User from "./page/dashboard/User";
import Laporan from "./page/dashboard/Laporan";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/halaman" element={<Halaman />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/pengaduan" element={<Pengaduan />} />
        <Route path="/respon" element={<Respon />} />
        <Route path="/user" element={<User />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="*" element={<Navigate to={'/login'} replace={true}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
