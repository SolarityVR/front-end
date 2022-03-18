import React from "react";
import Base from "modules/DAOS/Base";

import Gallery from "components/Gallery";
import { GALLERY } from "data/daos";

const Marketplace = () => {
  return (
    <Base>
      <Gallery rows={GALLERY.rows} />
    </Base>
  );
};

export default Marketplace;
