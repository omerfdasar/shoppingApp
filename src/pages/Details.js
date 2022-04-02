import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import Bag from "../assets/Bag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  console.log(params.id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.id]);

  const handleBack = () => {
    navigate(-1);
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow className={styles.detailsNavIcon} onClick={handleBack} />
        <h1>Details Page</h1>
        <Bag className={styles.detailsNavIcon} onClick={handleCheckout} />
      </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img className={styles.detailsImage} src={product?.image} />
      </div>
    </div>
  );
};

export default Details;
