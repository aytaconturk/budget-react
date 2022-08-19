const Hesap = () => {
    return (
        <div class="balance">
            <div class="card border-green">
                <div class="card-header border-green-light">
                    <span>Total Balance
                        <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                    <h4>2500</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="card-title">Income </h5>
                            <span type="button" class="badge badge-success" data-toggle="modal"
                                data-target="#incomeModal">400$</span>
                        </div>
                        <div class="col-6">
                            <h5 class="card-title">Expense</h5>
                            <span class="badge badge-danger">1400$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hesap;