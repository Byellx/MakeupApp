import React, { Component, Fragment } from "react"
import styles from "@/styles/Footer.module.css"

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className={styles.footer}>
          Todos os direitos reservados &copy; {new Date().getFullYear()}
        </footer>
      </Fragment>
    )
  }
}

export default Footer