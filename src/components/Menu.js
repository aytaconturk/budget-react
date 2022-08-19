const Menu = () => {
    return (
        <div className="header">
            <nav className="nav justify-content-around menu">
                <a className="nav-link active" href="index.html"><i className="fa fa-home" aria-hidden="true"></i></a>
                <a className="nav-link" href="ekle.html"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
                <a className="nav-link" href="kategori.html"><i className="fa fa-list" aria-hidden="true"></i></a>
                <a className="nav-link" href="user.html"><i className="fa fa-user" aria-hidden="true"></i></a>
            </nav>
        </div>
    )
}

export default Menu;