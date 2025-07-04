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
    <div className={styles.typeGrid}>
      {types.map((type) => (
        <div
          key={type.id}
          className={styles.typeCard}
          onClick={() => handleTipTypeClick(type.id)}
        >
          <img src={type.imgUrl} alt={type.name} />
          <span>{type.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MapDetail;
