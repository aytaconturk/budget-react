import Harcamalar from "./Harcamalar";
import Menu from "./Menu";
import Hesap from "./Hesap";
import TarihFiltreleme from "./TarihFiltreleme";
import { useState } from "react";

function AnaSayfa() {
  const [harcamaTipiDegeri, setHarcamaTipiDegeri] = useState(-1);

  console.log("harcamaTipiDegeri: ", harcamaTipiDegeri);

  const harcamaTipi = (e) => {
    setHarcamaTipiDegeri(e);
  };

  return (
    <div className="container-sm pt-3">
      <Hesap harcamaTipi={harcamaTipi} />
      <div className="content-list mt-2">
        <TarihFiltreleme />
        <Harcamalar harcamaTipi={harcamaTipiDegeri} />
      </div>
    </div>
  );
}

export default AnaSayfa;
