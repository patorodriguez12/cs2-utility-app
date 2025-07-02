import React from "react";
import Card from "../components/Card"
import styles from "../styles/Home.module.css"

const maps = [
  {
    name: "Mirage",
    image: "./assets/mirage.webp",
    logo: "./assets/mirage-logo.webp",
  },
  {
    name: "Dust 2",
    image: "./assets/dust2.webp",
    logo: "./assets/dust2-logo.webp",
  },
  {
    name: "Nuke",
    image: "./assets/nuke.webp",
    logo: "./assets/nuke-logo.webp",
  },
  {
    name: "Inferno",
    image: "./assets/inferno.webp",
    logo: "./assets/inferno-logo.webp",
  },
  {
    name: "Anubis",
    image: "./assets/anubis.webp",
    logo: "./assets/anubis-logo.webp",
  },
  {
    name: "Ancient",
    image: "./assets/ancient.webp",
    logo: "./assets/ancient-logo.webp",
  },
];

const Home = () => {
  const handleClick = (mapName) => {
    // Aquí redirigirías a la página de detalles del mapa
    console.log(`Navegar a los detalles de ${mapName}`);
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Mapas de Counter Strike 2</h1>
      <div className={styles.mapList}>
        {maps.map((map) => (
          <Card
            key={map.name}
            name={map.name}
            image={map.image}
            onClick={() => handleClick(map.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;