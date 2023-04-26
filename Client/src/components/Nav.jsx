import generarNumeroAleatorio from './Random.jsx';
import SearchBar from './SearchBar.jsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './card.module.css'


const Nav = ({onSearch}) => {
    const location = useLocation();                    //? Obtengo la ubicacion y guardo en locacion
    if (location.pathname === '/') return null
        // si la direccion es "/" este componente no retorna nada y no se muestra
    return (
        <nav className={styles.navbar}>
                <SearchBar onSearch={onSearch} />
                <button className={styles.boton} onClick={() =>{onSearch(generarNumeroAleatorio())}}>PJ Random</button>
                <button className={styles.boton}>
                    <Link to="/home" className={styles.miLink}>Home </Link>
                </button>
                <button className={styles.boton}>
                    <Link to="/Favorites" className={styles.miLink}>Favoritos </Link>
                </button>
                <button className={styles.boton}>
                    <Link to="/about" className={styles.miLink}>Sobre mi </Link>
                </button>
        </nav>

    )
    }


    export default Nav;