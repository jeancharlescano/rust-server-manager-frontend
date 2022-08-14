import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import ServerListScreen from "../screens/serverListScreen/ServerListScreen";

const main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={App} />
        <Route path="/servers" element={ServerListScreen} />
      </Routes>
    </div>
  );
};

export default main;
