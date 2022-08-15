import React from "react";
import { Routes, Route } from "react-router-dom";

import ServerListScreen from "../screens/serverListScreen/ServerListScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";

const main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/servers" element={<ServerListScreen/>} />
      </Routes>
    </div>
  );
};

export default main;
