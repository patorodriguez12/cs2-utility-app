import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import styles from "../styles/BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <BiArrowBack size={35} />
    </button>
  );
};

export default BackButton;
