import { useEffect, useState } from "react";
import { api } from "../api";

const Hesap = () => {

    const [harcamaTutari, setHarcamaTutari] = useState(0);
    const [gelirTutari, setGelirTutari] = useState(0);

    const harcamaTutariniHesapla = (kullaniciId) => {
        new Promise((resolve) => {
          let url = "/harcamalar/harcama-tutarini-getir/" + kullaniciId;
    
          api()
            .get(url)
            .then((yanit) => {
              setHarcamaTutari(yanit.data);
            });
        });
      }

      const gelirTutariniHesapla = (kullaniciId) => {
        new Promise((resolve) => {
          let url = "/harcamalar/gelir-tutarini-getir/" + kullaniciId;
    
          api()
            .get(url)
            .then((yanit) => {
              setGelirTutari(yanit.data);
            });
        });
      }
    
      useEffect(() => {
        harcamaTutariniHesapla(1)
        gelirTutariniHesapla(1)
      }, []);

    return (
        <div className="balance">
            <div className="card border-green">
                <div className="card-header border-green-light">
                    <span>Total Balance
                        <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    <h4>{gelirTutari - harcamaTutari}</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-title">Income </h5>
                            <span type="button" className="badge badge-success" data-toggle="modal"
                                data-target="#incomeModal">{gelirTutari}$</span>
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">Expense</h5>
                            <span className="badge badge-danger">{harcamaTutari}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hesap;