import { useState, useEffect } from "react";
import { Product } from "../api/Api";

import Button from "./Button";


const ListProducts = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Product(page).then(async (product) => setProduct(product));
  }, [page]);

  const next = () => {
    setProduct([]);
    setPage(page + 1);
  };

  const prev = () => {
    setProduct([]);
    setPage(page - 1);
  };

  if (Product.length < 1) return <h1>Cargando...</h1>;

  return (
    <>
      {page === 1 ? "" : <Button value="Prev" action={prev} />}
      {page === 42 ? "" : <Button value="Next" action={next} />}

      <ul className={styles.gridProducts}>
        {Product.map(({ id, name, image}) => (
          <Product
            id={id}
            name={name}
            image={image}
            gender={gender}
            
            key={id}
          />
        ))}
      </ul>
    </>
  );
};

export default ListProducts;
