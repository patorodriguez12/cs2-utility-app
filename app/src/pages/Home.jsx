import React from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const maps = [
  {
    name: "Mirage",
    image: "https://i.imgur.com/xo39TBZ.png",
    logo: "https://i.imgur.com/uUP10aO.png",
  },
  {
    name: "Dust 2",
    image: "https://i.imgur.com/MiqrSGw.png",
    logo: "https://i.imgur.com/jOEmf42.png",
  },
  {
    name: "Nuke",
    image: "https://i.imgur.com/u2ekRvE.png",
    logo: "https://i.imgur.com/AwBLhSM.png",
  },
  {
    name: "Inferno",
    image: "https://i.imgur.com/NiouVuk.png",
    logo: "https://i.imgur.com/HTKJUMY.png",
  },
  {
    name: "Anubis",
    image: "https://i.imgur.com/r97TdZt.png",
    logo: "https://i.imgur.com/qx7FMIw.png",
  },
  {
    name: "Ancient",
    image: "https://i.imgur.com/Y8xyA6z.png",
    logo: "https://i.imgur.com/h1PXjXe.png",
  },
];

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
