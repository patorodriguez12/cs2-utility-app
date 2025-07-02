import styles from "../styles/Card.module.css";

const Card = ({ name, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.mapImage} />
      <h3 className={styles.mapName}>{name}</h3>
    </div>
  );
};

export default Card;
