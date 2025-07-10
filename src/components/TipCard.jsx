import styles from "../styles/TipPage.module.css";

const TipCard = ({ tip, onClick }) => {
  const youtubeId = new URL(tip.videoUrl).searchParams.get("v");

  return (
    <div
      className={styles.card}
      onClick={() => onClick(youtubeId)}
    >
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={tip.title}
        className={styles.thumbnail}
      />
      <p className={styles.caption}>{tip.title}</p>
    </div>
  );
};

export default TipCard;
