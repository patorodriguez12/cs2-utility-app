import { useState } from "react";
import styles from "../styles/MapCard.module.css";

const MapCard = ({ name, image, logo, onClick, tipCount }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.card} onClick={onClick}>
      {/* Loading Placeholder */}
      {!loaded && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner}></div>
        </div>
      )}

      {/* Imagen principal con transición de opacidad */}
      <img
        src={image}
        alt={name}
        className={`${styles.mapImage} ${
          loaded ? styles.loaded : styles.hidden
        }`}
        onLoad={() => setLoaded(true)}
      />

      {/* Logo (hover effect) */}
      <img src={logo} alt={name} />
      <div className={styles.tipCount}>
        {tipCount} {tipCount === 1 ? "tip" : "tips"}
      </div>
    </div>
  );
};

export default MapCard;
