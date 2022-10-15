import searchIMG from "../images/135-search.png";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <img src={searchIMG.src} />
      <input type="text" placeholder="Search for a country" />
    </div>
  );
}

export default SearchBar;
