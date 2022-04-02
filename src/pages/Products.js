import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className={styles.products}>
        {products.map((element) => (
          <Link
            to={`details/${element.id}`}
            key={element.id}
            className={styles.product}
          >
            <h6>{element.category}</h6>
            <p>{element.title}</p>
            <img style={{ width: "100px" }} src={element.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
