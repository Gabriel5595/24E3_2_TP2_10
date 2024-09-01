import React from 'react';
import styles from "./products.module.css"

function Products() {
  return (
    <div>
      <div className={styles.ProductsContainer} id='products'>
      <h2>Produtos</h2>
        <div className={styles.ProductsContainerImgs}>
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 1" />
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 2" />
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 3" />
        </div>
        
        <div className={styles.ProductsContainerImgs}>
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 1" />
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 2" />
          <img className={styles.ProductsImg} src="https://static.thenounproject.com/png/778835-200.png" alt="Produto 3" />
        </div>
      </div>
    </div>
  );
}

export default Products;
