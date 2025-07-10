// ─── External Packages ─────────────────────────────────────
import pkg from "../../package.json";
import { useNavigate } from "react-router-dom";

// ─── Components ────────────────────────────────────────────
import MapCard from "../components/MapCard";

// ─── Data (JSON) ───────────────────────────────────────────
import { maps } from "../utils/maps";
import { tips } from "../utils/tips";

// ─── Styles ────────────────────────────────────────────────
import styles from "../styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (mapId) => {
    navigate(`/${mapId}`);
  };

  return (
    <div className={styles.homeContainer}>

      {/* Title */}
      <h1 className={styles.title}>Elegi el mapa</h1>
      <div className={styles.mapList}>

        {/* Map List */}
        {maps.map((map) => {
          const tipCount = tips.filter((tip) => tip.mapId === map.id).length;

          return (
            <MapCard
              key={map.name}
              name={map.name}
              image={map.image}
              logo={map.logo}
              tipCount={tipCount}
              onClick={() => handleClick(map.id)}
            />
          );
        })}
      </div>

      {/* App Version */}
      <p className={styles.version}>Versión: BETA {pkg.version}</p>
    </div>
  );
};

export default Home;
