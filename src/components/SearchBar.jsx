import '../styles/SearchBar.css'

function SearchBar({onSearchChange}) {
  return (
    <input
        className="search-bar"
        type="search"
        placeholder="Search title and content"
        onChange={onSearchChange}
    />
  );
}

export default SearchBar;
