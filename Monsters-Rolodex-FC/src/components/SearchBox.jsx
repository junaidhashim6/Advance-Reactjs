/* eslint-disable react/prop-types */

export const SearchBox = ({onSearch, placeholder}) => {
  return (
    <div>
        <input type="Search" className="monsters-search-box" onChange={onSearch} placeholder={placeholder}/>
    </div>
  )
}

export default SearchBox