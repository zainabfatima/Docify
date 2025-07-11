import React from "react";
// import "./App.css";
import Payments from "./components/Payments.jsx";
import ParentComp from "./components/ParentComp/ParentComp.jsx";
import FavoritesPage from "./components/ParentComp/FavoritesPage.jsx";
import WireFrame from "./components/ParentComp/WireFrame.jsx";
import "./index.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import {Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import ForceRedirect from "./components/ForceRedirect";
// import Footer from "./components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetData } from './redux/actions/resetData.js';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetData());
    };
  }, [location.pathname]);
  const [isConnected, setIsconnected] = useState(false);
  // const user =  JSON.parse(localStorage.getItem('user'))._id

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      setIsconnected(false);
    }
  };

  return (
    <>
      <Navbar Logout={Logout} user={isConnected} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={isConnected}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ForceRedirect user={isConnected}>
              <Signin />
            </ForceRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <ForceRedirect user={isConnected}>
              <Signup />
            </ForceRedirect>
          }
        />
        <Route path="*" element={<NotFound />} />

        {/* Maaz Routes */}

        <Route path="/payments" element={<Payments />} />
        <Route path="/home" element={<ParentComp />} />
        <Route path="/newDoc" element={<NotFound />} />
        <Route path="/favorites" element={<NotFound />} />
        <Route path="/info" element={<Landing />} />
        <Route path="/:user/alldocuments" element={<FavoritesPage />} />
        <Route path="/wireframe" element={<WireFrame />} />

        {/* ================== */}
      </Routes>
    </>
  );
}

export default App;


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { resetData } from './actions';

// function PageA() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(resetData());
//     };
//   }, [location.pathname]);

//   // rest of your component code
// }