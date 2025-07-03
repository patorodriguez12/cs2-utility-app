import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { maps } from "../utils/maps";

const Home = () => {
  const handleClick = (mapName) => {
    console.log(`Navegar a los detalles de ${mapName}`);
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
            onClick={() => handleClick(map.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
