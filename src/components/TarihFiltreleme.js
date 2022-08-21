const TarihFiltreleme = () => {
    return (
        <>
            <div className="d-flex mb-3">
                <div className="form-group me-2">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Bugün</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group me-2">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Hafta</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Ay</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <h5 className="text-dark">Bugün</h5>
        </>
    )
}

export default TarihFiltreleme;