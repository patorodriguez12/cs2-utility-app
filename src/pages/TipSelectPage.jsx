// ─── External Packages ─────────────────────────────────────
import { useNavigate, useParams } from "react-router";

// ─── Data (JSON) ───────────────────────────────────────────
import { maps } from "../utils/maps";
import { types } from "../utils/types";

// ─── Styles ────────────────────────────────────────────────
import styles from "../styles/TipSelectPage.module.css";

const TipSelectPage = () => {
  const navigate = useNavigate();
  const { mapId } = useParams();
  const map = maps.find((m) => m.id === mapId);

  if (!map) return <div>Mapa no encontrado!</div>;

  const handleTipTypeClick = (typeId) => {
    navigate(`/${mapId}/${typeId}`);
  };

  return (
    <div className={styles.typeContainer}>
      {/* Title */}
      <h1 className={styles.title}>Elegi la utilidad para <i>{map.name}</i></h1>

      {/* Tip List */}
      <div className={styles.typeList}>
        {types.map((type) => (
          <div
            key={type.id}
            className={styles.typeCard}
            onClick={() => handleTipTypeClick(type.id)}
          >
            <img
              src={type.background}
              alt={type.name}
              className={styles.background}
            />
            <img src={type.imgUrl} alt={type.name} />
            <span className={styles.typeName}>{type.name}</span>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ⬅ Atras
      </button>
    </div>
  );
};

export default TipSelectPage;
