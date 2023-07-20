import React, {Component, Fragment} from "react"

export default class Home extends Component{
  render(){
    return(
      <Fragment>
        <main id="main2">
          <div className="about">
          <h1>Bem-vindo à nossa loja de maquiagem!</h1>
            <p>
              Navegue pela nossa incrível coleção de produtos de maquiagem de alta qualidade.
              Temos uma variedade de marcas para atender a todas as suas necessidades de beleza.
              Encontre os melhores produtos de maquiagem com apenas alguns cliques!
            </p>
            </div>
        </main>
      </Fragment>
    )
  }
}