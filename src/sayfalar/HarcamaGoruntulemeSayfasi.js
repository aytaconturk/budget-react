import Menu from "../components/Menu";
import SecimKutusu from "../components/SecimKutusu";

const HarcamaGoruntulemeSayfasi = () => {
  return (
    <>
      <div className="main">
        <Menu />
        <div className="content">
          <div className="container-sm pt-3">
            <div className="content-list mt-2">
              <h5 className="text-dark mb-3">Harcama Görüntüle</h5>
              <div className="card">
                <div className="card-body py-1">
                  <form>
                    <div className="form-group mt-2 mb-3">
                      <label>Ödeme Hesabı</label>
                      <SecimKutusu
                        value={{label: "enpara", value: 1}}
                        isDisabled={true}
                      />
                    </div>
                    <div className="form-group mt-2 mb-3">
                      <label>Kategori</label>
                      <SecimKutusu
                        value={{label: "Yemek", value: 1}}
                        isDisabled={true}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Harcama Başlığı
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="baslik"
                        value="harcama"
                        disabled
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="exampleInputPassword1">Tutar</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tutar"
                        value="24.99"
                        disabled
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="exampleFormControlTextarea1">
                        Açıklama
                      </label>
                      <textarea
                        className="form-control"
                        id="aciklama"
                        rows="3"
                        disabled
                        value="lorep ipsum"
                      ></textarea>
                    </div>
                    <div className="form-group mt-2">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="exampleFormControlFile1">
                            Fotoğraf 
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          
                        </div>
                      </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="mt-4 mb-2 text-end">
                      <button type="submit" className="btn btn-primary px-5 me-2">
                        Güncelle
                      </button>
                      <button className="btn btn-danger ">
                        <i class="fa fa-trash-o"></i> Sil
                      </button>
                    </div>
                  </form>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HarcamaGoruntulemeSayfasi;
