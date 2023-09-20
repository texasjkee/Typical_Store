import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../redux/categories/categoriesSlice";
import { getProducts } from "../redux/products/productsSlice";

import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import UserForm from "../User/UserForm";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <div className="app">
      <Header />

      <UserForm/>
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