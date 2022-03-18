import React from "react";
import Base from "modules/DAOS/Base";
import HeroWorld from "components/Hero/World";
import Gallery from "components/GalleryLand";
import { WORLD_GALLERY } from "data/daos";

const Home = () => {
  return (
    <Base>
      <HeroWorld />
      <Gallery {...WORLD_GALLERY} />
    </Base>
  );
};

export default Home;
