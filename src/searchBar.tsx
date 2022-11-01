import { useRef } from "react";
import searchIMG from "../images/135-search.png";

function SearchBar(props: any) {
  const searchRef = useRef<HTMLInputElement>(null);
  const updateSearchTerm = () => {
    //console.log(searchRef.current?.value);
    props.setSearchTerm(searchRef.current?.value);
  };

  return (
    <div className="search-bar-container">
      <img src={searchIMG.src} />
      <input
        type="text"
        placeholder="Search for a country"
        ref={searchRef}
        onChange={updateSearchTerm}
      />
    </div>
  );
}

export default SearchBar;
