import React, { Component, Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout