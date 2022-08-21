import HarcamaEkle from "../components/HarcamaEkle";
import Menu from "../components/Menu";

const HarcamaEklemeSayfasi = () => {
    return (
        <div className="main">
            <Menu />
            <div className="content">
                <div className="container-sm pt-3">
                    <div className="content-list mt-2">
                       <HarcamaEkle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HarcamaEklemeSayfasi;