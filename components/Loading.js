import React, {Component, Fragment} from "react"
import styles from "@/styles/Loading.module.css"

class Loading extends Component{
    render(){
        return(
            <Fragment>
                <div className={styles.loadingPage}/>
            </Fragment>
        )
    }
}

export default Loading