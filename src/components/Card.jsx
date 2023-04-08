//importar styles de Card.module.css
import styles from './card.module.css'
import { Link } from 'react-router-dom'


export default function Card(props) {
  return (
      <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.content}>
              <button className='boton' onClick={() => props.onClose(props.id)}>X</button>

        <Link to={`/detail/${props.id}`} >
        <h3 className="card-name">{props.name}</h3>
        </Link>

        <h4>{props.name}</h4>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
        <h4>{props.status}</h4>
        <h4>{props.origin}</h4>
        <img alt={props.image} src={props.image} />
          </div>
        </div>
      </div>
    )
  }
