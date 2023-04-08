import generarNumeroAleatorio from './Random.jsx';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import styles from './card.module.css'



const Nav = ({onSearch}) => {
    return (
        <nav className={styles.navbar}>
                <SearchBar onSearch={onSearch} />
                <button className={styles.boton} onClick={() =>{onSearch(generarNumeroAleatorio())}}>Random</button>
                <button className={styles.boton}>
                    <Link to="/home" className={styles.miLink}>Home </Link>
                </button>
                <button className={styles.boton}>
                    <Link to="/about" className={styles.miLink}>About </Link>
                </button>
        </nav>

    )
    }


    export default Nav;