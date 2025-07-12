// ─── Components ────────────────────────────────────────────
import TipCard from "../components/TipCard";
import TipVideoModal from "../components/TipVideoModal";
import NotFound from "./NotFound";
import BackButton from "../components/BackButton";

// ─── Data (JSON) ───────────────────────────────────────────
import { tips } from "../utils/tips";
import { maps } from "../utils/maps";
import { types } from "../utils/types";

// ─── External Packages ─────────────────────────────────────
import { useParams } from "react-router-dom";
import { useState } from "react";

// ─── Styles ────────────────────────────────────────────────
import styles from "../styles/TipPage.module.css";

const TipPage = () => {
  const { mapId, typeId } = useParams();

  const [activeVideo, setActiveVideo] = useState(null);

  const map = maps.find((m) => m.id === mapId);
  const type = types.find((t) => t.id === typeId);

  const filteredTips = tips.filter(
    (tip) => tip.mapId === mapId && tip.type === typeId
  );

  if (!map || !type) return <NotFound />;

  return (
    <div className={styles.tipContainer}>
      <div className={styles.headerRow}>
        <BackButton />
        <h1 className={styles.title}>
          {type.name} en <i>{map.name}</i>
        </h1>
      </div>

      {/* Tip List */}
      <div className={styles.tipList}>
        {/* Card */}
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
