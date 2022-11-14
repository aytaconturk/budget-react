import { useEffect, useState } from "react";
import { api } from "../api";
import moment from "moment";
import "moment/locale/tr";
import EnparaLogo from "../images/banka/enpara.svg";
import EnparaLogo2 from "../images/banka/enpara1.svg";
import VakifbankLogo from "../images/banka/vakifbank.png";
import KuveytturkLogo from "../images/banka/kuveyt-turk.png";
import { Link } from "react-router-dom";

const harcamaData = [
  {
      "id": 7,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 1,
          "kategoriAdi": "Gelir",
          "olusturulmaTarihi": "2022-11-01T21:59:25.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 1,
          "adi": "Vakıfbank",
          "bakiye": -280,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 1,
          "olusturulmaTarihi": "2022-10-11T12:30:53.000+00:00"
      },
      "baslik": "Maaş Ödemesi",
      "tutar": 200,
      "aciklama": null,
      "fotograf": null,
      "tarih": "2022-11-11T12:40:35.000+00:00",
      "harcamaTipi": 1
  },
  {
      "id": 6,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 1,
          "kategoriAdi": "Gelir",
          "olusturulmaTarihi": "2022-11-01T21:59:25.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 2,
          "adi": "Enpara",
          "bakiye": -110,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 2,
          "olusturulmaTarihi": "2022-10-11T12:38:26.000+00:00"
      },
      "baslik": "Gelir",
      "tutar": 50,
      "aciklama": null,
      "fotograf": null,
      "tarih": "2022-11-08T11:50:17.000+00:00",
      "harcamaTipi": 1
  },
  {
      "id": 5,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 1,
          "kategoriAdi": "Gelir",
          "olusturulmaTarihi": "2022-11-01T21:59:25.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 1,
          "adi": "Vakıfbank",
          "bakiye": -280,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 1,
          "olusturulmaTarihi": "2022-10-11T12:30:53.000+00:00"
      },
      "baslik": "Gelir",
      "tutar": 200,
      "aciklama": null,
      "fotograf": null,
      "tarih": "2022-11-08T11:15:42.000+00:00",
      "harcamaTipi": 1
  },
  {
      "id": 4,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 4,
          "kategoriAdi": "Taksit",
          "olusturulmaTarihi": "2022-11-07T07:31:59.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 2,
          "adi": "Enpara",
          "bakiye": -110,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 2,
          "olusturulmaTarihi": "2022-10-11T12:38:26.000+00:00"
      },
      "baslik": "Superonline Faturası",
      "tutar": 120,
      "aciklama": "",
      "fotograf": null,
      "tarih": "2022-11-08T08:47:52.000+00:00",
      "harcamaTipi": 0
  },
  {
      "id": 3,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 2,
          "kategoriAdi": "Fatura",
          "olusturulmaTarihi": "2022-11-01T21:59:43.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 1,
          "adi": "Vakıfbank",
          "bakiye": -280,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 1,
          "olusturulmaTarihi": "2022-10-11T12:30:53.000+00:00"
      },
      "baslik": "Taksit Ödemesi",
      "tutar": 680,
      "aciklama": "mi robot",
      "fotograf": null,
      "tarih": "2022-11-07T07:30:23.000+00:00",
      "harcamaTipi": 0
  },
  {
      "id": 2,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 2,
          "kategoriAdi": "Fatura",
          "olusturulmaTarihi": "2022-11-01T21:59:43.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 3,
          "adi": "Kuveyt Türk",
          "bakiye": -115,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 3,
          "olusturulmaTarihi": "2022-11-01T21:31:47.000+00:00"
      },
      "baslik": "Turkcell Fatura",
      "tutar": 115,
      "aciklama": "terst",
      "fotograf": null,
      "tarih": "2022-11-07T07:29:43.000+00:00",
      "harcamaTipi": 0
  },
  {
      "id": 1,
      "kullaniciId": 1,
      "kategori": {
          "kategoriId": 5,
          "kategoriAdi": "Yemek",
          "olusturulmaTarihi": "2022-11-08T11:02:44.000+00:00",
          "isDeleted": null
      },
      "hesap": {
          "hesapId": 2,
          "adi": "Enpara",
          "bakiye": -110,
          "paraBirimi": "TL",
          "kullaniciId": 1,
          "ikonId": 2,
          "olusturulmaTarihi": "2022-10-11T12:38:26.000+00:00"
      },
      "baslik": "Test",
      "tutar": 40,
      "aciklama": "test",
      "fotograf": null,
      "tarih": "2022-11-01T22:04:38.000+00:00",
      "harcamaTipi": 0
  }
]

const Harcamalar = () => {
  const [harcamalarVeri, setHarcamalarVeri] = useState([]);

  const veri = (harcamaTipi) =>
    new Promise((resolve) => {
      let url = "/harcamalar/harcama-listesi/" + 0;

      api()
        .get(url)
        .then((yanit) => {
          console.log("yanit: ", yanit);
          setHarcamalarVeri(yanit.data);
        });
    });

  useEffect(() => {
    veri();
  }, []);

  console.log("harcamalarVeri: ", harcamalarVeri);

  const goruntule = (e) => {
      console.log("test: ", e)
  }

  return (
    <>
      {harcamalarVeri.map((veri) => {
        return (
          <div
            key={veri.id}
            className={
              veri.harcamaTipi === 0
                ? "card mb-2 border-expense"
                : veri.harcamaTipi === 1
                ? "card mb-2 border-income"
                : "card mb-2"
            }
          >
            <div className="card-body py-1">
              <div className="row align-items-center">
                <div className="col-2 p-0">
                  <div className="category-icon">
                    {veri.hesap?.ikonId === 1 ? (
                      <img
                        style={{ maxWidth: "60px", maxHeight: "20px" }}
                        src={VakifbankLogo}
                        alt=""
                      />
                    ) : veri.hesap?.ikonId === 2 ? (
                      <img
                        style={{ maxWidth: "60px", maxHeight: "20px" }}
                        src={EnparaLogo2}
                        alt=""
                      />
                    ) : veri.hesap?.ikonId === 3 ? (
                      <img
                        style={{ maxWidth: "60px", maxHeight: "20px" }}
                        src={KuveytturkLogo}
                        alt=""
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-11">
                      <div className="row mb-1">
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <div className="transaction-category font-weight-bold">
                              {veri.baslik}
                            </div>
                            {veri.harcamaTipi === 0 ? (
                              <div className="price-expense">
                                <span>-</span> {veri.tutar}
                                <span>₺</span>
                              </div>
                            ) : (
                              <div className="price-income">
                                {veri.tutar}
                                <span>₺</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row transaction-sub-info">
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <div className="transaction-title">
                              <em>{veri?.kategori?.kategoriAdi}</em>
                            </div>
                            <div className="transaction-date">
                              {moment(veri.tarih).calendar()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 my-2 border-start">
                    <Link to="/harcama-goruntule" ><span onClick={(e) => goruntule(veri.id)} role="button" className="d-block" style={{color: "#ffbe68bf"}}><i className="fa fa-file"></i></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Harcamalar;
