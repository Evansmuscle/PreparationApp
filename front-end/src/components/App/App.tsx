import styles from "./App.module.scss";

import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Preparation from "@pages/Preparation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/preparation/:preparationId" element={<Preparation />} />
    </Routes>
  );
};

export default App;
