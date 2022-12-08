import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import AnaSayfa from "./components/AnaSayfa";
import Giris from "./components/Giris";
import Menu from "./components/Menu";
import NotFound from "./NotFound";
import HarcamaEklemeSayfasi from "./sayfalar/HarcamaEklemeSayfasi";
import HarcamaGoruntulemeSayfasi from "./sayfalar/HarcamaGoruntulemeSayfasi";
import Hesaplar from "./sayfalar/Hesaplar";
import Kategoriler from "./sayfalar/Kategoriler";
import Kullanici from "./sayfalar/Kullanici";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./components/PrivateRoute";
import { history } from "./components/history";
import { setLoggedIn } from "./redux/actions/loginActions";

function Root() {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  if(user){
    dispatch(setLoggedIn(true));
  }

  const currentUser = useSelector((x) => x.loginReducer.isLoggedIn);

  console.log("currentUser: ", currentUser);


  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <>
      <div className="App">
        <div className="main">
          <Menu />

          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <AnaSayfa />
                  </PrivateRoute>
                }
              />
              <Route
                path="/budget-react"
                element={
                  <PrivateRoute>
                    <AnaSayfa />
                  </PrivateRoute>
                }
              />
              <Route path="/giris" element={<Giris />} />
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
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;
