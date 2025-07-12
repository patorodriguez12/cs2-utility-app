import styles from "../styles/TipCard.module.css";
import { FaPlay } from "react-icons/fa";

const TipCard = ({ tip, onClick }) => {
  const youtubeId = new URL(tip.videoUrl).searchParams.get("v");

  return (
    <div className={styles.card} onClick={() => onClick(youtubeId)}>
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={tip.title}
        className={styles.thumbnail}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Play Button */}
      <div className={styles.playButton}>
        <FaPlay size={40} />
      </div>

      {/* Video title */}
      <p className={styles.caption}>{tip.title}</p>
    </div>
  );
};

export default TipCard;
