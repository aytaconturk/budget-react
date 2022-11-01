import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api"
import FotografdanYaziOkuma from "./FotografdanYaziOkuma";
import SecimKutusu from "./SecimKutusu";

const HarcamaEkle = () => {

    const [kategoriListesi, setKategoriListesi] = useState([]);
    const [hesapListesi, setHesapListesi] = useState([]);

    const [selectedKategori, setSelectedKategori] = useState(null)
    const [selectedHesap, setSelectedHesap] = useState(null)

    const hesapApiVeri = () => {

        new Promise((resolve) => {
            let url = "/hesaplar/hesap-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("hesap yanit: ", yanit)
                    setHesapListesi(yanit.data.map(e => {
                        return (
                            {
                                value: e.hesapId,
                                id: e.hesapId,
                                label: e.adi + " " + e.bakiye + e.paraBirimi,
                            }
                        )
                    }))
                })
        })
    }

    const kategoriApiVeri = () => {

        new Promise((resolve) => {
            let url = "/kategoriler/kategori-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("kategori yanit: ", yanit)
                    setKategoriListesi(yanit.data.map(e => {
                        return (
                            {
                                value: e.kategoriId,
                                id: e.kategoriId,
                                label: e.kategoriAdi,
                                kategoriAdi: e.kategoriAdi
                            }
                        )
                    }))
                })
        })
    }

    useEffect(() => {
        kategoriApiVeri()
        hesapApiVeri()
    }, [])

    const yonlendir = useNavigate();

    console.log("baslik: ", document.getElementById("baslik")?.value)

    const onSubmit = (e) => {
        e.preventDefault()

        console.log("baslik gonder: ", document.getElementById("baslik")?.value)

        let veri = {
            hesapId: selectedHesap !== null ? selectedHesap?.value : null,
            kullaniciId: 1,
            kategoriId: selectedKategori !== null ? selectedKategori?.value : null,
            baslik: document.getElementById("baslik")?.value,
            tutar: document.getElementById("tutar")?.value,
            aciklama: document.getElementById("aciklama")?.value,
            fotograf: null,
            tarih: new Date()
        }

        console.log("veri: ", veri)

        new Promise((resolve) => {
            let url = "/harcamalar/harcama-ekle";

            api()
                .post(url, veri)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    yonlendir("/")
                })
        })

    }

    return (
        <>
            <h5 className="text-dark mb-3">Harcama Ekle</h5>
            <div className="card">
                <div className="card-body py-1">
                    <form onSubmit={onSubmit}>
                    <div className="form-group mt-2 mb-3">
                            <label>Ödeme Hesabı</label>
                            <SecimKutusu options={hesapListesi} onChange={e => setSelectedHesap(e)} />
                        </div>
                        <div className="form-group mt-2 mb-3">
                            <label>Kategori</label>
                            <SecimKutusu options={kategoriListesi} onChange={e => setSelectedKategori(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Harcama Başlığı</label>
                            <input type="text" className="form-control" id="baslik"
                                placeholder="harcama" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1">Tutar</label>
                            <input type="text" className="form-control" id="tutar"
                                placeholder="24.99" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleFormControlTextarea1">Açıklama</label>
                            <textarea className="form-control" id="aciklama" rows="3"></textarea>
                        </div>
                        <div className="form-group mt-2">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleFormControlFile1">Fotoğraf Ekle</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-2">
                            <button type="submit" className="btn btn-primary px-5">Kaydet</button>
                        </div>
                    </form>
                    <hr className="mt-5"/>
                    <FotografdanYaziOkuma />
                </div>
            </div>
        </>
    )
}

export default HarcamaEkle;