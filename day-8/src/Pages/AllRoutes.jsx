import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import Login from "../Components/Login";
import { Admin } from "../Components/Admin";
import PrivateRoute from "./PrivateRoute";
import EditProduct from "../Components/EditProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/edit/:id" element={
        <PrivateRoute>
          <EditProduct/>
        </PrivateRoute>
      }/>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
