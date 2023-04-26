//importar styles de Card.module.css
import { connect } from 'react-redux'
import styles from './card.module.css'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../redux/actions'
import { useState } from 'react'
import { useEffect } from 'react'


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

  const [isFav, setIsfav] = useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsfav(false)
      removeFav(id)
    } else {
      setIsfav(true)
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
      })
    }
  }

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      const fav = myFavorites[i];
      if (fav.id === id) {
        setIsfav(true);
      }
    }
  }, [myFavorites, id]);



  return (
    <div>
      <div className={styles.card}>
        <div className={styles.content}>
          <button className={styles.closeButton} onClick={() => onClose(id)}>X</button>
          <img alt={image} src={image} />
          <Link to={`/detail/${id}`} >
            <h3>{name}</h3>
          </Link>
          <h4>{name}</h4>
          <h4>{species}</h4>
          <h4>{gender}</h4>
          <h4>{status}</h4>
          <h4>{origin}</h4>
          {
            isFav ? (
              <button className={styles.favButton} onClick={handleFavorite}>❤️</button>
            ) : (
              <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
            )
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)