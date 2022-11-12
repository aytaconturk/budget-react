import { useEffect, useState } from "react";
import { api } from "../api";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const Hesap = () => {
  const [harcamaTutari, setHarcamaTutari] = useState(0);
  const [gelirTutari, setGelirTutari] = useState(0);
  const [toplamBakiye, setToplamBakiye] = useState(0);

  const harcamaTutariniHesapla = (kullaniciId) => {
    new Promise((resolve) => {
      let url = "/harcamalar/harcama-tutarini-getir/" + kullaniciId;

      api()
        .get(url)
        .then((yanit) => {
          setHarcamaTutari(yanit.data);
        });
    });
  };

  const gelirTutariniHesapla = (kullaniciId) => {
    new Promise((resolve) => {
      let url = "/harcamalar/gelir-tutarini-getir/" + kullaniciId;

      api()
        .get(url)
        .then((yanit) => {
          setGelirTutari(yanit.data);
        });
    });
  };

  useEffect(() => {
    harcamaTutariniHesapla(1);
    gelirTutariniHesapla(1);
  }, []);

  const [openAccordion, setOpenAccordion] = useState("1");
  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion();
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <div className="balance">
      <Accordion open={openAccordion} toggle={toggleAccordion} className="mb-1">
        <AccordionItem>
          <AccordionHeader targetId={"1"}>
            <div>
              <span>
                Toplam Bakiye
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
              {gelirTutari - harcamaTutari < 0 ? (
                <h4 className="text-danger">{gelirTutari - harcamaTutari}₺</h4>
              ) : gelirTutari - harcamaTutari > 0 ? (
                <h4 className="text-success">{gelirTutari - harcamaTutari}₺</h4>
              ) : (
                <h4 className="text-gray">{gelirTutari - harcamaTutari}₺</h4>
              )}
            </div>
          </AccordionHeader>
          <AccordionBody accordionId={"1"}>
          <div className="row">
            <div className="col-6">
              <h5 className="card-title mb-2">Gelir </h5>
              <span
                type="button"
                className="badge badge-success"
                data-toggle="modal"
                data-target="#incomeModal"
              >
                {gelirTutari}₺
              </span>
            </div>
            <div className="col-6">
              <h5 className="card-title mb-2">Harcama</h5>
              <span className="badge badge-danger">{harcamaTutari}₺</span>
            </div>
          </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Hesap;
