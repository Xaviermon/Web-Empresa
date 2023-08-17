import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.search}>
            <input type='text' placeholder='Buscar...' />
            <FiSearch className={styles["search-icon"]} />
        </div>
    );
};

export default SearchBar;
