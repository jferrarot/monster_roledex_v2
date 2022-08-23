import './search-box.styles.css'

const SearchBox = ({searchClassName,searchPlaceholder,onChangeHandler}) =>(
    <input 
        className={`search-box ${searchClassName}`}
        type='search' 
        placeholder={searchPlaceholder}
        onChange={onChangeHandler}
    />
)
export default SearchBox;