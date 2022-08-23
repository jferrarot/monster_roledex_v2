import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        const {onChangeHandler,searchPlaceholder,searchClassName} = this.props;
        return(
            <input 
                className={`search-box ${searchClassName}`}
                type='search' 
                placeholder={searchPlaceholder}
                onChange={onChangeHandler}
            />
        )
    }
}
export default SearchBox;