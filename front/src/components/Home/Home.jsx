import { useSelector } from "react-redux";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const Home = () => {
  const { list } = useSelector(({ products }) => products);

  return (
    <div>
      <Poster />
      <Products products={list} amount={5} title="Trending"/>
    </div>
  );
};

export default Home;
