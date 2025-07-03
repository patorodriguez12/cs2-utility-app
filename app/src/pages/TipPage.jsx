import { useParams } from "react-router-dom";
import { tips } from "../utils/tips";
import { maps } from "../utils/maps";
import { types } from "../utils/types";

const TipPage = () => {
  const { mapId, typeId } = useParams();

  const map = maps.find((m) => m.id === mapId);
  const type = types.find((t) => t.id === typeId);

  const filteredTips = tips.filter(
    (tip) => tip.mapId === mapId && tip.type === typeId
  );

  if (!map || !type) return <div>Error: datos inválidos.</div>;

  return (
    <div>
      <h1>
        {type.name}s en {map.name}
      </h1>
      {filteredTips.length === 0 ? (
        <p>No hay tips de este tipo para este mapa.</p>
      ) : (
        <ul>
          {filteredTips.map((tip) => (
            <li key={tip.id}>
              <strong>{tip.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TipPage;
