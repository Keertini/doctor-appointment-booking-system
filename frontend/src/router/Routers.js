import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ThankYou from "../pages/ThankYou";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Doctors from "../pages/Doctors";
import SearchResultList from "./../pages/SearchResultList";
import DoctorDetails from "../pages/DoctorDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/doctors/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
