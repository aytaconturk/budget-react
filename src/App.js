import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AnaSayfa from "./components/AnaSayfa";
import Menu from "./components/Menu";
import NotFound from "./NotFound";
import HarcamaEklemeSayfasi from "./sayfalar/HarcamaEklemeSayfasi";
import HarcamaGoruntulemeSayfasi from "./sayfalar/HarcamaGoruntulemeSayfasi";
import Hesaplar from "./sayfalar/Hesaplar";
import Kategoriler from "./sayfalar/Kategoriler";
import Kullanici from "./sayfalar/Kullanici";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Menu />

          <div className="content">
            <Routes>
              <Route path="/" element={<AnaSayfa />} />
              <Route path="/harcama-ekle" element={<HarcamaEklemeSayfasi />} />
              <Route
                path="/harcama-goruntule"
                element={<HarcamaGoruntulemeSayfasi />}
              />
              <Route path="/kategoriler" element={<Kategoriler />} />
              <Route path="/hesaplar" element={<Hesaplar />} />
              <Route path="/kullanici" element={<Kullanici />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
