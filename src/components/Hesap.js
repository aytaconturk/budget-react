const Hesap = () => {
    return (
        <div className="balance">
            <div className="card border-green">
                <div className="card-header border-green-light">
                    <span>Total Balance
                        <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    <h4>2500</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-title">Income </h5>
                            <span type="button" className="badge badge-success" data-toggle="modal"
                                data-target="#incomeModal">400$</span>
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">Expense</h5>
                            <span className="badge badge-danger">1400$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hesap;