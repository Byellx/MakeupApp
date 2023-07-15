import React, {Component, Fragment} from "react"
import styles from "@/styles/Filter.module.css"

class Filter extends Component{
    render(){
        const { searchParams, handleSearch, handleSearchParam } = this.props;

        return(
            <Fragment>
                <div className={styles.filterContainer}>
                    <input
                        type="text"
                        value={searchParams}
                        onChange={handleSearchParam}
                        placeholder="Encontre um produto"
                    />
                    <button onClick={handleSearch}>Buscar</button>
                </div>
            </Fragment>
        )
    }
}

export default Filter