import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { addItemToCart } from "../redux/user/userSlice";

import styles from "../../styles/Product.module.css";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
  const { images, title, price, description } = item;

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const handlerAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              // onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.price}>{price}$</div>
          <div className={styles.color}>
            <span>Color:</span> Green
          </div>
          <div className={styles.sizes}>
            <span>Sizes:</span>
            <div className={styles.list}>
              {SIZES.map((size) => (
                <div
                  onClick={() => setCurrentSize(size)}
                  className={`${styles.size} ${
                    currentSize === size ? styles.active : ""
                  }`}
                  key={size}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <button
              onClick={() => handlerAddToCart}
              className={styles.add}
              disabled={!currentSize}
            >
              Add to cart
            </button>
            <button className={styles.favourite}>Add to favourites</button>
          </div>

          <div className={styles.bottom}>
            <div className={styles.purchase}>19 people purchased</div>

            <Link to={ROUTES.HOME}> Return to store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
