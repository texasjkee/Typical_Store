import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

import { filterByPrice } from "../redux/products/productsSlice";

const Home = () => {
  const { products: { list, filtered }, categories, } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //TODO: check this.
    if (!list.length) return;

    dispatch(filterByPrice(100));
    //TODO: check this.
  }, [dispatch, list.length]);

  return (
    <div>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </div>
  );
};

export default Home;
