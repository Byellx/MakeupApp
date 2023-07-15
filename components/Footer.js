import React, { Component, Fragment } from "react"
import styles from "@/styles/Footer.module.css"

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className={styles.footer}>MakeUp &copy; 2023</footer>
      </Fragment>
    )
  }
}

export default Footer