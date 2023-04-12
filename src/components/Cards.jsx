import Card from './Card';
import styles from './card.module.css'

export default function Cards ({characters, onClose}) {
  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          id ={char.id}
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  )
}

