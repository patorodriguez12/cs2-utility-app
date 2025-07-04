import { useNavigate, useParams } from "react-router";
import { maps } from "../utils/maps";
import { types } from "../utils/types";
import styles from "../styles/MapDetail.module.css";

const MapDetail = () => {
  const navigate = useNavigate();
  const { mapId } = useParams();
  const map = maps.find((m) => m.id === mapId);

  if (!map) return <div>Mapa no encontrado!</div>;

  const handleTipTypeClick = (typeId) => {
    navigate(`/${mapId}/${typeId}`);
  };

  return (
    <div className={styles.typeContainer}>
      <h1 className={styles.title}>Elegi la utilidad</h1>
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

export default MapDetail;
