import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../api/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    //TODO: check this.
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  return (
    <div>
    {!data 
      ? <section>Loading...</section>
      : <Product {...data} />}
    </div>
  );
};

export default SingleProduct;
