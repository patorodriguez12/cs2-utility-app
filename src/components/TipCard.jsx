import styles from "../styles/TipPage.module.css";
import { FaPlay } from "react-icons/fa";

const TipCard = ({ tip, onClick }) => {
  const youtubeId = new URL(tip.videoUrl).searchParams.get("v");

  return (
    <div className={styles.card} onClick={() => onClick(youtubeId)}>
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={tip.title}
        className={styles.thumbnail}
      />

      <div className={styles.overlay}></div>
      {/* Play Button */}
      <div className={styles.playButton}>
        <FaPlay size={40} />
      </div>
      <p className={styles.caption}>{tip.title}</p>
    </div>
  );
};

export default TipCard;
