import { useEffect, useState } from "react";
import { api } from "../api";
import moment from 'moment';
import 'moment/locale/tr';
import EnparaLogo from '../images/banka/enpara.svg';
import EnparaLogo2 from '../images/banka/enpara1.svg';
import VakifbankLogo from '../images/banka/vakifbank.png';

const Harcamalar = () => {

    const [harcamalarVeri, setHarcamalarVeri] = useState([]);

    const veri = () => (
        new Promise((resolve) => {
            let url = "/harcamalar/harcama-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    setHarcamalarVeri(yanit.data)
                })
        })
    )

    useEffect(() => {
        veri();
    }, [])

    console.log("harcamalarVeri: ", harcamalarVeri);

    return (
        <>
            {
                harcamalarVeri.map(veri => {
                    return (
                        <div key={veri.id} className="card mb-2">
                            <div className="card-body py-1">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        <div className="category-icon">
                                            <img style={{maxWidth: '60px', maxHeight: '20px'}} src={VakifbankLogo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <div className="row mb-1">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-between">
                                                    <div className="transaction-category font-weight-bold">
                                                        {veri.baslik}
                                                    </div>
                                                    <div className="price-expense">
                                                        <span>-</span> {veri.tutar}
                                                        <span>₺</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row transaction-sub-info">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-between">
                                                    <div className="transaction-title">
                                                        <em> Salary for July</em>
                                                    </div>
                                                    <div className="transaction-date">
                                                        {
                                                            moment(veri.tarih).calendar()
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Harcamalar;