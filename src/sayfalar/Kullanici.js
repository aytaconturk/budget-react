import Menu from "../components/Menu";

const Kullanici = () => {
    return (
        <div className="main">
            <Menu />
            <div className="content">
                <div className="container-sm pt-3">
                    <div className="content-list mt-2">
                        <h5 className="text-dark mb-3 ml-2">Aytaç Öntürk <span type="button" className="text-primary ms-2"><i
                            className="fa fa-pencil" aria-hidden="true"></i></span></h5>
                        <div className="card">
                            <div className="card-body py-2">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">E-mail</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        value="aytconturk@gmail.com" readonly />
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body py-2">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Şifre Güncelle</label>
                                    <button className="btn btn-secondary btn-sm">Güncelle</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body py-2">
                                <div className="form-group">
                                    <button className="btn btn-secondary btn-sm btn-danger">Çıkış Yap <i className="fa fa-sign-out"
                                        aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kullanici;