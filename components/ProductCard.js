import React, { Component, Fragment } from "react"
import styles from "../styles/ProductCard.module.css"

class ProductCard extends Component {
  render() {
    const { product } = this.props

    return (
      <Fragment>
        <div className={styles.cardContainer}>
          <div className={styles.front}>
            <header className={styles.cardHeader}>{product.name}</header>
            
            <main className={styles.cardMain}>
              <div>
                <img src={product.image_link} />
              </div>
              
              <div className={styles.cardInfo}>
                <span>{product.brand}</span>
                <span>${product.price}</span>
              </div>
            </main>
          
            <footer className={styles.cardFooter}>
              <button>Detalhes</button>
            </footer>
          </div>

          <div className={styles.back}>
            <header className={styles.cardHeader}>{product.name}</header>
              
              <main className={styles.cardMain2}>
                  <div>
                    <label>Preço: $</label>{product.price}<br/>
                    <label>Marca: </label>{product.brand}<br/>
                    <label>Categoria: </label>{product.category}<br/>
                    <label>Tipo: </label>{product.product_type}<br/>
                  </div>
                  <div>
                    <label>Descrição: </label>{product.description}
                  </div>
              </main>
            
              <footer className={styles.cardFooter}>
                <div>
                  <a href={product.product_link}>Ver produto</a>
                  <a href={product.website_link}>Website</a>
                </div>
              </footer>
          </div>
      </div>
      </Fragment>
    )
  }
}

export default ProductCard