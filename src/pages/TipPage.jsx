// Components imports
import TipCard from "../components/TipCard";
import TipVideoModal from "../components/TipVideoModal";

// Utils imports
import { tips } from "../utils/tips";
import { maps } from "../utils/maps";
import { types } from "../utils/types";

// React imports
import { useParams } from "react-router-dom";
import { useState } from "react";

// Styles imports
import styles from "../styles/TipPage.module.css";

// TipPage Component
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
      {/* TITLE START*/}
      <h1 className={styles.title}>
        {type.name} en <i>{map.name}</i>
      </h1>
      {/* TIP LIST */}
      <div className={styles.tipList}>
        {/* CARD MAP */}
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} onClick={setActiveVideo} />
        ))}
        {/* VIDEO MODAL */}
        <TipVideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      </div>
    </div>
  );
};

export default TipPage;
