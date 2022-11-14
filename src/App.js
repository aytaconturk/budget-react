import Harcamalar from "./components/Harcamalar";
import Menu from "./components/Menu";
import Hesap from "./components/Hesap";
import TarihFiltreleme from "./components/TarihFiltreleme";
import { useState } from "react";

function App() {

  const [harcamaTipiDegeri, setHarcamaTipiDegeri] = useState(-1);

  console.log("harcamaTipiDegeri: ", harcamaTipiDegeri)

  const harcamaTipi = (e) => {
    setHarcamaTipiDegeri(e)
    
  }

  return (
    <div className="App">
      <div className="main">
        <Menu />
        <div className="content">
          <div className="container-sm pt-3">
            <Hesap harcamaTipi={harcamaTipi} />
            <div className="content-list mt-2">
              <TarihFiltreleme />
              <Harcamalar harcamaTipi={harcamaTipiDegeri} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
