import { useParams } from "react-router-dom";
import { tips } from "../utils/tips";
import { maps } from "../utils/maps";
import { types } from "../utils/types";
import styles from "../styles/TipPage.module.css";

const TipPage = () => {
  const { mapId, typeId } = useParams();

  const map = maps.find((m) => m.id === mapId);
  const type = types.find((t) => t.id === typeId);

  const filteredTips = tips.filter(
    (tip) => tip.mapId === mapId && tip.type === typeId
  );

  if (!map || !type) return <div>Error: datos inválidos.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {type.name}s en {map.name}
      </h1>

      {filteredTips.length === 0 ? (
        <p className={styles.message}>
          No hay tips de este tipo para este mapa.
        </p>
      ) : (
        <div className={styles.grid}>
          {filteredTips.map((tip) => {
            const youtubeId = new URL(tip.videoUrl).searchParams.get("v");
            return (
              <div key={tip.id} className={styles.card}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={tip.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.caption}>{tip.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TipPage;
