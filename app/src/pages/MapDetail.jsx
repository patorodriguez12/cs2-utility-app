import { useParams } from "react-router";
import { maps } from "../utils/maps";

const MapDetail = () => {
  const { mapId } = useParams();
  const map = maps.find((m) => m.id === mapId);

  if (!map) return <div>Mapa no encontrado!</div>;

  return (
    <div>
      <h1>{map.name}</h1>
    </div>
  );
};

export default MapDetail;
