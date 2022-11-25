import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome/css/font-awesome.min.css";
import "./Main.css";
import HarcamaEklemeSayfasi from "./sayfalar/HarcamaEklemeSayfasi";
import Kategoriler from "./sayfalar/Kategoriler";
import Kullanici from "./sayfalar/Kullanici";
import Hesaplar from "./sayfalar/Hesaplar";
import HarcamaGoruntulemeSayfasi from "./sayfalar/HarcamaGoruntulemeSayfasi";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App/>

    
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();