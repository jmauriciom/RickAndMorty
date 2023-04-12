import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./card.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div className={styles.container}>
      {favorites.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            id={id}
            key={name}
            name={name}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            status={status}
          />
        );
      })}
      </div>
  );
};

export default Favorites;
