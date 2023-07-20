import React, {Component, Fragment} from "react"

export default class About extends Component{
    render(){
        return(
            <Fragment>
                <main id="main2">
                    <div className="about">
                        <h1>Sobre o Projeto</h1>
                            <p>
                                Bem-vindo ao meu projeto pessoal em desenvolvimento web usando React!
                                Neste projeto, eu me desafiei a criar uma aplicação de catálogo de produtos de maquiagem,
                                utilizando a Makeup API para obter informações sobre os produtos.
                            </p>

                            <h2>Motivação</h2>
                            
                            <p>
                                A motivação por trás deste projeto foi aprimorar minhas habilidades em desenvolvimento web,
                                especialmente com a biblioteca React. Eu queria construir algo prático e interessante que
                                me permitisse explorar conceitos como manipulação de estado, consumo de APIs, criação de
                                componentes reutilizáveis e o uso de ferramentas de desenvolvimento modernas.
                            </p>

                            <h2>Conclusão</h2>
                            
                            <p>
                                Este projeto foi uma jornada emocionante e gratificante, que me ajudou a crescer como
                                desenvolvedor web. Espero que você aproveite explorando os produtos de maquiagem em meu
                                catálogo virtual tanto quanto eu me diverti criando esta aplicação.
                            </p>
                            
                            <p>
                                Obrigado por visitar meu projeto pessoal e por compartilhar essa experiência comigo!
                            </p>
                        </div>
                    </main>
            </Fragment>
        )
    }
}