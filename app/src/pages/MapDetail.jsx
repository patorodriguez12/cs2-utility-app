import { useNavigate, useParams } from "react-router";
import { maps } from "../utils/maps";
import { types } from "../utils/types";

const MapDetail = () => {
  const navigate = useNavigate();
  const { mapId } = useParams();
  const map = maps.find((m) => m.id === mapId);

  if (!map) return <div>Mapa no encontrado!</div>;

  const handleTipTypeClick = (typeId) => {
    navigate(`/${mapId}/${typeId}`);
  };

  return (
    <div>
      <h1>Tips para {map.name}</h1>
      <h2>Elegi un tipo</h2>
      <ul>
        {types.map((type) => (
          <li key={type.id}>
            <button onClick={() => handleTipTypeClick(type.id)}>
              {type.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapDetail;
