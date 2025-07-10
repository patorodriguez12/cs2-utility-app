// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página no encontrada</h1>
      <p className={styles.text}>La ruta que estás buscando no existe.</p>
      <button className={styles.button} onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
