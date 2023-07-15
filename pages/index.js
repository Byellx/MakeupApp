import React, { Component, Fragment } from "react"
import ProductCard from "../components/ProductCard"
import Filter from "@/components/Filter"
import Loading from "@/components/Loading"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      isLoading: true,
      searchParams: "",
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  async getProducts() {
    try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)
      const products = await response.json()

      this.setState({ products: products, isLoading: false })
    } catch (error) {
      console.log("Erro", error)
      this.setState({isLoading: false})
    }
  }

  async searchProducts() {
    try {
      const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.state.searchParams}`
      );
      const products = await response.json();

      this.setState({ products: products });
    } catch (error) {
      console.log("Erro", error);
    }
  }

  handleSearch = () => {
    this.setState({ isLoading: true }, () => {
      this.searchProducts().then(() => {
        this.setState({ isLoading: false });
      });
    });
  };

  handleSearchParam = (event) => {
    this.setState({ searchParams: event.target.value });
  };

  render() {
    const products = this.state.products.reverse();

    if(this.state.isLoading){
      return(
        <Fragment>
          <main id="mainLoading">
            <Loading/>
          </main>
        </Fragment>
      )
    }

    return (
      <main id="main1">
        <Filter
          searchParams={this.state.searchParams}
          handleSearch={this.handleSearch}
          handleSearchParam={this.handleSearchParam}
        />
        <ul>
          {products.map((product) => {
            if (products.indexOf(product) < 30) {
              return (
                <Fragment key={product.id}>
                  <li>
                    <ProductCard product={product} />
                  </li>
                  <br />
                </Fragment>
              )
            }
          })}
        </ul>
      </main>
    )
  }
}