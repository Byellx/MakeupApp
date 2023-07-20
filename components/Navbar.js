import React, { Component, Fragment } from "react"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className={styles.navbar}>
          <div>
            <h1>
              Make<span>Up</span>
            </h1>
          </div>
          <div>
            <ul>
              <li><Link href="./" legacyBehavior><a className={styles.link}>Home</a></Link></li>
              <li><Link href="./products" legacyBehavior><a className={styles.link}>Produtos</a></Link></li>
              <li><Link href="./about" legacyBehavior><a className={styles.link}>Sobre</a></Link></li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Navbar