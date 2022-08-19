import Harcamalar from "./components/Harcamalar";
import Menu from "./components/Menu";
import Hesap from "./components/Hesap";
import TarihFiltreleme from "./components/TarihFiltreleme";

function App() {
  return (
    <div className="App">
      <div class="main">
        <Menu />
        <div class="content">
          <div class="container-sm pt-3">
            <Hesap />
            <div class="content-list mt-2">
              <TarihFiltreleme />
              <Harcamalar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
