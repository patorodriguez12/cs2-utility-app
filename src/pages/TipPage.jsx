import { useParams } from "react-router-dom";
import { tips } from "../utils/tips";
import { maps } from "../utils/maps";
import { types } from "../utils/types";
import styles from "../styles/TipPage.module.css";
import { useState } from "react";

const TipPage = () => {
  const { mapId, typeId } = useParams();

  const [activeVideo, setActiveVideo] = useState(null);

  const map = maps.find((m) => m.id === mapId);
  const type = types.find((t) => t.id === typeId);

  const filteredTips = tips.filter(
    (tip) => tip.mapId === mapId && tip.type === typeId
  );

  if (!map || !type) return <div>Error: datos inválidos.</div>;

  return (
    <div className={styles.tipContainer}>
      <h1 className={styles.title}>
        {type.name} en <i>{map.name}</i>
      </h1>

      <div className={styles.tipList}>
        {filteredTips.map((tip) => {
          const youtubeId = new URL(tip.videoUrl).searchParams.get("v");

          return (
            <div
              key={tip.id}
              className={styles.card}
              onClick={() => setActiveVideo(youtubeId)}
            >
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                alt={tip.title}
                className={styles.thumbnail}
              />
              <p className={styles.caption}>{tip.title}</p>
            </div>
          );
        })}
        {activeVideo && (
          <div
            className={styles.modalOverlay}
            onClick={() => setActiveVideo(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video grande"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipPage;
