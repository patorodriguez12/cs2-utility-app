// ─── Components ────────────────────────────────────────────
import NotFound from "./NotFound";
import BackButton from "../components/BackButton";

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

  if (!map) return <NotFound />;

  const handleTipTypeClick = (typeId) => {
    navigate(`/${mapId}/${typeId}`);
  };

  return (
    <div className={styles.typeContainer}>
      <div className={styles.headerRow}>
        <BackButton />
        <h1 className={styles.title}>
          Elegi la utilidad para <i>{map.name}</i>
        </h1>
      </div>

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
    </div>
  );
};

export default TipSelectPage;
