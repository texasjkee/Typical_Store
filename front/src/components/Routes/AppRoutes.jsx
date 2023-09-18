import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/home" element={<Home />}/>
    </Routes>
  );
};

export default AppRoutes;
