import React from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const maps = [
  {
    name: "Mirage",
    image: "https://i.imgur.com/xo39TBZ.png",
    logo: "https://i.imgur.com/UOptav1.png",
  },
  {
    name: "Dust 2",
    image: "https://i.imgur.com/MiqrSGw.png",
    logo: "https://i.imgur.com/IpyVurw.png",
  },
  {
    name: "Nuke",
    image: "https://i.imgur.com/u2ekRvE.png",
    logo: "https://i.imgur.com/qG5NZSx.png",
  },
  {
    name: "Inferno",
    image: "https://i.imgur.com/NiouVuk.png",
    logo: "https://i.imgur.com/iC6zY71.png",
  },
  {
    name: "Anubis",
    image: "https://i.imgur.com/r97TdZt.png",
    logo: "https://i.imgur.com/H3RvNUe.png",
  },
  {
    name: "Ancient",
    image: "https://i.imgur.com/Y8xyA6z.png",
    logo: "https://i.imgur.com/GRuFjE1.png",
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
            logo={map.logo}
            onClick={() => handleClick(map.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
