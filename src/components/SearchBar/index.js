import { BiSearchAlt } from "react-icons/bi";
import FormField from '../FormField';
import './style.scss'

function SearchBar() {
  return (
    <div>
        <form action="" className="search__form " method="POST">
        <FormField
                name="search"
                type="text"
                label='' 
                placeholder="Search an article"
                />
        <button type="submit">
        <BiSearchAlt className="searchIcon" />
        </button>
        </form>
    </div>
  );
}

export default SearchBar;
