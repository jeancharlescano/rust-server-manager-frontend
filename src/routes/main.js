import React from "react";
import { Routes, Route } from "react-router-dom";

import ServerListScreen from "../screens/serverListScreen/ServerListScreen.js";
import HomeScreen from "../screens/homeScreen/HomeScreen.js";
import AddServerScreen from "../screens/AddServerScreen/AddServerScreen.jsx";

const main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/servers" element={<ServerListScreen/>} />
        <Route path="/newserver" element={<AddServerScreen/>} />
      </Routes>
    </div>
  );
};

export default main;
