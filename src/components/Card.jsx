//importar styles de Card.module.css
import styles from './card.module.css'
import { Link } from 'react-router-dom'


export default function Card(props) {
  return (
      <div className={styles.carta}>
        <div>
          <button className='boton' onClick={() => props.onClose(props.id)}>X</button>
        </div>
        <Link to={`/detail/${props.id}`} >
        <h3 className="card-name">{props.name}</h3>
        </Link>
        <div>{props.name}</div>
        <div>{props.species}</div>
        <div>{props.gender}</div>
        <div>{props.status}</div>
        <div>{props.origin}</div>
        <div><img alt={props.image} src={props.image} /></div>
      </div>
    )
  }
