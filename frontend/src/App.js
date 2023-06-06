import React, { Children, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import { verifyToken } from "./actions/auth";

import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import VerifyAccount from "./Pages/VerifyAccount";
import Stream from "./Pages/Stream";
import Seizure from "./Pages/Seizure";

const App = () => {
  const [tokenVerify, setTokenVerify] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const authWrapper = () => {
    const token = localStorage.getItem("epivision_auth");
    console.log(token);
    setTokenVerify(JSON.parse(token));
    // console.log(token)
    // const response = await verifyToken({ token: JSON.parse(token)?.access });

    // if (response) {
    //  return <>{children}</>;
    // } else {
    //  return <Navigate to="/login" replace />;
    // }
  };

  useEffect(() => {
    authWrapper();
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        Component={() => {
          return tokenVerify?.access ? (
            <Navigate to={"/dashboard/stream"} />
          ) : (
            <Login />
          );
        }}
      />
      <Route
        path="/activate/:uid/:token"
        Component={() => {
          return tokenVerify?.access ? (
            <Navigate to={"/dashboard/stream"} />
          ) : (
            <VerifyAccount />
          );
        }}
      />
      <Route
        path="/login"
        Component={() => {
          return tokenVerify?.access ? (
            <Navigate to={"/dashboard/stream"} />
          ) : (
            <Login />
          );
        }}
      />
      <Route
        path="/dashboard/*"
        Component={() => {
          return tokenVerify?.access ? <Dashboard /> : <Navigate to={"/"} />;
        }}
      />
      
      <Route
        path="dashboard/seizurerecord"
        Component={() => {
          return tokenVerify?.access ? (
            <Navigate to={"/Dashboard/Seizure"} />
            // <Seizure/>
          ) : (
            <Login />
          );
        }}
      />
    </Routes>
  );
};

export default App;
