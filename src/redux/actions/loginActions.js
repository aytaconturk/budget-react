import { api } from "../../api";
import * as actionTypes from "./actionTypes";

export const girisYap = (veri) => (dispatch) => {
  api()
    .post("/auth/login", veri)
    .then((response) => {
      console.log("girisYap response: ", response);

      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      dispatch({
        type: actionTypes.GIRIS_YAP,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GIRIS_YAPILIRKEN_BIR_HATA_OLUSTU,
        payload: "GIRIS_YAPILIRKEN_BIR_HATA_OLUSTU",
      });
    });
};

export const kayitOl = (veri) => (dispatch) => {
  api()
    .post("/auth/register", veri)
    .then((response) => {
      console.log("kayitOl response: ", response);
      dispatch({
        type: actionTypes.KAYIT_OL,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.KAYIT_OLURKEN_BIR_HATA_OLUSTU,
        payload: "GIRIS_YAPILIRKEN_BIR_HATA_OLUSTU",
      });
    });
};

export const setLoggedIn = (veri) => (dispatch) => {
    dispatch({
        type: actionTypes.GIRIS_YAP,
        payload: veri,
      });
}
