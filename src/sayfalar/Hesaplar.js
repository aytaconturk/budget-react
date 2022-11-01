import Menu from "../components/Menu";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useEffect, useState } from "react";
import { api } from "../api";
import SecimKutusu from "../components/SecimKutusu";
import { hesapIkonListesi } from "../components/hesapIkonListesi";

const Hesaplar = () => {
    const [hesaplarVeri, setHesaplarVeri] = useState([]);
    const [veriGuncelle, setVeriGuncelle] = useState(false);

    const [selectedIkon, setSelectedIkon] = useState(null)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onSubmit = (e) => {
        e.preventDefault()

        let veri = {
            adi: document.getElementById("kategoriAdi")?.value,
            kullaniciId: 1,
            ikonId: selectedIkon !== null && typeof(selectedIkon) !== "undefined" ? selectedIkon.value : null
        }

        console.log("veri: ", veri)

        new Promise((resolve) => {
            let url = "/hesaplar/hesap-ekle";

            api()
                .post(url, veri)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    setVeriGuncelle(true);
                })
        })
    }

    const veri = () => {

        new Promise((resolve) => {
            let url = "/hesaplar/hesap-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    setHesaplarVeri(yanit.data)
                    setVeriGuncelle(false);
                })
        })

        new Promise((resolve) => {
            let url = "/hesaplar/hesap-bilgisi/1";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("hesap-bilgisi yanit: ", yanit.data)
                    //setHesaplarVeri(yanit.data)
                    //setVeriGuncelle(false);
                })
        })
    }

    useEffect(() => {
        veri()
    }, [veriGuncelle])

    console.log("Kategoriler veri: ", hesaplarVeri)

    return (
        <div className="main">
            <Menu />
            <div className="content">
                <div className="container-sm pt-3">
                    <div className="content-list mt-2">
                        <div className="mb-4 d-flex justify-content-between align-items-center">
                            <h5 className="text-dark">Hesaplar</h5>
                            <button onClick={() => toggle()} className="btn btn-primary btn-sm"><i className="fa fa-plus-circle" aria-hidden="true"></i> Hesap Ekle</button>
                        </div>
                        <ul className="list-group">
                            {
                                hesaplarVeri.length > 0 ?
                                hesaplarVeri.map(e => {
                                    return (
                                        <li key={e.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            {e.adi + " " + e.bakiye + e.paraBirimi}
                                            <div>
                                                <span type="button" className="text-primary me-2"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                                                <span type="button" className="text-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                                            </div>
                                        </li>
                                    )
                                })
                                : (
                                    <li className="text-danger list-group-item d-flex justify-content-between align-items-center">
                                        Hesap Listesi Boş!
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} backdrop="static" centered={true}>
                <ModalHeader toggle={toggle}>Hesap Ekle</ModalHeader>
                <form onSubmit={onSubmit}>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Hesap Adi: </label>
                            <input required type="text" className="form-control" id="kategoriAdi"
                                placeholder="Enpara" />
                        </div>
                        <div className="form-group mt-2 mb-3">
                            <label>Hesap İkonu</label>
                            <SecimKutusu options={hesapIkonListesi} onChange={e => setSelectedIkon(e)} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary" onClick={toggle}>Kaydet</Button>
                    </ModalFooter>
                </form>

            </Modal>
        </div>
    )
}

export default Hesaplar;