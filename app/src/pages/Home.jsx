import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { maps } from "../utils/maps";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (mapId) => {
    navigate(`/${mapId}`);
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>?</h1>
      <div className={styles.mapList}>
        {maps.map((map) => (
          <Card
            key={map.name}
            name={map.name}
            image={map.image}
            logo={map.logo}
            onClick={() => handleClick(map.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
