import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../redux/categories/categoriesSlice";

import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import "./App.css";
import Products from "../Products/Products";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default App;
