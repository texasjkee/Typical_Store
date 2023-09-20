import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetProductQuery } from "../../api/apiSlice";
import { getRelatedProducts } from "../../components/redux/products/productsSlice";
import { ROUTES } from "../../utils/routes";

import Product from "./Product";
import Products from "./Products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { releted } = useSelector(({ products }) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    //TODO: check this.
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (data) {
      dispatch(getRelatedProducts(data.category.id));
    }
  }, [data]);

  return !data ? (
    <section>Loading...</section>
  ) : (
    <div>
      <Product {...data} />
      <Products products={releted} amount={5} title="Related products" />
    </div>
  );
};

export default SingleProduct;