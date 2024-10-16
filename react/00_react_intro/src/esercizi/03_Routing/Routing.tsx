import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/Admin";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import PhotoDetails from "./pages/catalog/PhotoDetails";
import Signin from "./pages/login/pages/Signin";
import Registration from "./pages/login/pages/Registration";
import LostPassword from "./pages/login/pages/LostPassword";
import PrivateRoute from "./common/PrivateRoute";
import { lazy } from "react";

// const Catalog = lazy (() => import("./pages/catalog/Catalog"));
const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Routes>
        <Route path="login" element={<Login />}>
          <Route index element={<Signin />} />
          <Route path="registration" element={<Registration />} />
          <Route path="lostPassword" element={<LostPassword />} />
        </Route>

        <Route path="admin" element={
          <PrivateRoute redirectTo="/login" element= {<Admin/> }  />
        } />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<PhotoDetails />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route
          path="*"
          element={
            <div>
              <p>This page does not exist</p>
              <Link to="/">Go to HomePage!</Link>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
