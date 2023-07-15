import React, { Component, Fragment } from "react"
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
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Navbar