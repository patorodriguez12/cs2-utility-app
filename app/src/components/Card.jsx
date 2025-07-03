import styles from "../styles/Card.module.css";

const Card = ({ name, image, logo, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.mapImage} />
      <img src={logo} alt={name} />
    </div>
  );
};

export default Card;
