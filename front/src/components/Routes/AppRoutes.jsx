import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
