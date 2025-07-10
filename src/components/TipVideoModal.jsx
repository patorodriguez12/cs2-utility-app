import styles from "../styles/TipPage.module.css";

const TipVideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video grande"
        ></iframe>
      </div>
    </div>
  );
};

export default TipVideoModal;
