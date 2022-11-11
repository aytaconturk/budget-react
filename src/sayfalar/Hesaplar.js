import Menu from "../components/Menu";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useEffect, useState } from "react";
import { api } from "../api";
import SecimKutusu from "../components/SecimKutusu";
import { hesapIkonListesi } from "../components/hesapIkonListesi";

const Hesaplar = () => {
  const [hesaplarVeri, setHesaplarVeri] = useState([]);
  const [veriGuncelle, setVeriGuncelle] = useState(false);

  const [selectedIkon, setSelectedIkon] = useState(null);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [gelirMiktari, setGelirMiktari] = useState(0);
  const [seciliHesap, setSeciliHesap] = useState(null);
  const [modalGelirEkle, setModalGelirEkle] = useState(false);
  const toggleGelirEkle = (hesapId) => {
    console.log("hesapId: ", hesapId);
    setSeciliHesap(hesapId);
    setModalGelirEkle(!modalGelirEkle);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let veri = {
      adi: document.getElementById("kategoriAdi")?.value,
      kullaniciId: 1,
      ikonId:
        selectedIkon !== null && typeof selectedIkon !== "undefined"
          ? selectedIkon.value
          : null,
    };

    console.log("veri: ", veri);

    new Promise((resolve) => {
      let url = "/hesaplar/hesap-ekle";

      api()
        .post(url, veri)
        .then((yanit) => {
          console.log("yanit: ", yanit);
          setVeriGuncelle(true);
        });
    });
  };

  const veri = () => {
    new Promise((resolve) => {
      let url = "/hesaplar/hesap-listesi";

      api()
        .get(url)
        .then((yanit) => {
          console.log("yanit: ", yanit);
          setHesaplarVeri(yanit.data);
          setVeriGuncelle(false);
        });
    });

    new Promise((resolve) => {
      let url = "/hesaplar/hesap-bilgisi/1";

      api()
        .get(url)
        .then((yanit) => {
          console.log("hesap-bilgisi yanit: ", yanit.data);
          //setHesaplarVeri(yanit.data)
          //setVeriGuncelle(false);
        });
    });
  };

  useEffect(() => {
    veri();
  }, [veriGuncelle]);

  console.log("Kategoriler veri: ", hesaplarVeri);

  const [openAccordion, setOpenAccordion] = useState("1");
  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion();
    } else {
      setOpenAccordion(id);
    }
  };

  const gelirEkle = (e) => {
    e.preventDefault();

    new Promise((resolve) => {
        let url = "/harcamalar/gelir-ekle";

        let veri = {
            hesapId: seciliHesap,
            tutar: gelirMiktari,
            baslik: document.getElementById("gelirBasligi")?.value,
            tarih: new Date(),
            kullaniciId: 1
        }
  
        api()
          .post(url, veri)
          .then((yanit) => {
            console.log("yanit: ", yanit.data);
            setVeriGuncelle(true);
          });
      });

      setModalGelirEkle(false);
  };

  return (
    <div className="main">
      <Menu />
      <div className="content">
        <div className="container-sm pt-3">
          <div className="content-list mt-2">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h5 className="text-dark">Hesaplar</h5>
              <button
                onClick={() => toggle()}
                className="btn btn-primary btn-sm"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i> Hesap
                Ekle
              </button>
            </div>

            {hesaplarVeri.length > 0 ? (
              hesaplarVeri.map((e, index) => {
                return (
                  <Accordion
                    open={openAccordion}
                    toggle={toggleAccordion}
                    className="mb-1"
                  >
                    <AccordionItem>
                      <AccordionHeader targetId={index}>
                        {e.adi + " " + e.bakiye + e.paraBirimi}
                      </AccordionHeader>
                      <AccordionBody accordionId={index}>
                        Hesap Bakiyesi={" "}
                        {e.bakiye < 0 ? (
                          <span className="text-danger">{e.bakiye}</span>
                        ) : (
                          <span className="text-success">{e.bakiye}</span>
                        )}
                        <div
                          className="text-end mt-2"
                          style={{ fontSize: "12px" }}
                        >
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => toggleGelirEkle(e.hesapId)}
                          >
                            Gelir Ekle{" "}
                            <span type="button" className="me-2">
                              <i className="fa fa-money" aria-hidden="true"></i>
                            </span>
                          </button>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                  </Accordion>
                );
              })
            ) : (
              <li className="text-danger list-group-item d-flex justify-content-between align-items-center">
                Hesap Listesi Boş!
              </li>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} backdrop="static" centered={true}>
        <ModalHeader toggle={toggle}>Hesap Ekle</ModalHeader>
        <form onSubmit={onSubmit}>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Hesap Adi: </label>
              <input
                required
                type="text"
                className="form-control"
                id="kategoriAdi"
                placeholder="Enpara"
              />
            </div>
            <div className="form-group mt-2 mb-3">
              <label>Hesap İkonu</label>
              <SecimKutusu
                options={hesapIkonListesi}
                onChange={(e) => setSelectedIkon(e)}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={toggle}>
              Kaydet
            </Button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal
        isOpen={modalGelirEkle}
        toggle={toggleGelirEkle}
        backdrop="static"
        centered={true}
      >
        <ModalHeader toggle={() => setModalGelirEkle(false)}>
          Gelir Ekle
        </ModalHeader>
        <form onSubmit={gelirEkle}>
          <ModalBody>
          <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Başlık: </label>
              <input
                required
                type="text"
                className="form-control"
                id="gelirBasligi"
                placeholder="Gelir"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Gelir Miktarı: </label>
              <input
                required
                type="number"
                className="form-control"
                id="gelirMiktari"
                placeholder="500"
                onChange={(e) => setGelirMiktari(e.target.value)}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Kaydet
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default Hesaplar;
