import { useNavigate } from "react-router-dom";
import { api } from "../api"

const HarcamaEkle = () => {

    const yonlendir = useNavigate();

    console.log("baslik: ", document.getElementById("baslik")?.value)

    const onSubmit = (e) => {
        e.preventDefault()

        console.log("baslik gonder: ", document.getElementById("baslik")?.value)

        let veri = {
            //id: 1,
            kullaniciId: 1,
            kategoriId: 1,
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
                            <label htmlFor="exampleFormControlSelect1">Kategori</label>
                            <select className="form-control">
                                <option>Seçiniz</option>
                            </select>
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
                </div>
            </div>
        </>
    )
}

export default HarcamaEkle;