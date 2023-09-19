import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path={ROUTES.HOME} element={<Home />}/>
    </Routes>
  );
};

export default AppRoutes;
