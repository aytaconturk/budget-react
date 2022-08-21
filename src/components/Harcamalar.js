import { useEffect, useState } from "react";
import { api } from "../api";
import moment from 'moment';
import 'moment/locale/tr';

const Harcamalar = () => {

    const [harcamalarVeri, setHarcamalarVeri] = useState([]);

    const veri = () => (
        new Promise((resolve) => {
            let url = "/harcamalar/harcama-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    setHarcamalarVeri(yanit.data)
                })
        })
    )

    useEffect(() => {
        veri();
    }, [])

    return (
        <>
            {
                harcamalarVeri.map(veri => {
                    return (
                        <div key={veri.id} className="card mb-2">
                            <div className="card-body py-1">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <div className="category-icon">
                                            <i className="fa fa-cutlery" aria-hidden="true"></i>
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
                                                        Salary for July
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