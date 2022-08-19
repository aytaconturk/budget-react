import { useEffect, useState } from "react";
import { api } from "../api";


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

    return (
        <>
            {
                harcamalarVeri.map(veri => {
                    return (
                        <div class="card">
                            <div class="card-body py-1">
                                <div class="row align-items-center">
                                    <div class="col-2">
                                        <div class="category-icon">
                                            <i class="fa fa-cutlery" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <div class="row mb-1">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between">
                                                    <div class="transaction-category font-weight-bold">
                                                        {veri.baslik}
                                                    </div>
                                                    <div class="price-expense">
                                                        <span>-</span> {veri.tutar}
                                                        <span>₺</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row transaction-sub-info">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-between">
                                                    <div class="transaction-title">
                                                        Salary for July
                                                    </div>
                                                    <div class="transaction-date">
                                                        14:30
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