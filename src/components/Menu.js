import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {

    const isLoggedIn =  useSelector(x => x.loginReducer.isLoggedIn);

    if(!isLoggedIn){
        return null;
    }

    return (
        <div className="header">
            <nav className="nav justify-content-around menu">
                <Link className="nav-link active" to="/" ><i className="fa fa-home" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/harcama-ekle" ><i className="fa fa-plus-circle" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/kategoriler" ><i className="fa fa-list" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/hesaplar" ><i className="fa fa-credit-card" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/kullanici" ><i className="fa fa-user" aria-hidden="true"></i></Link>
            </nav>
        </div>
    )
}

export default Menu;