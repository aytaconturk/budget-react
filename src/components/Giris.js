import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { girisYap } from "../redux/actions/loginActions";
import { history } from "./history";

const Giris = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const isLoggedIn =  useSelector(x => x.loginReducer.isLoggedIn);
  const user = JSON.parse(localStorage.getItem("user"));


  const onSubmit = (e) => {
      e.preventDefault()
      const data = {
          userName: userNameRef.current.value,
          password: passwordRef.current.value,
        }
        
    console.log("onSubmit data: ", data);
    
    dispatch(girisYap(data))
  };

  useEffect(() => {
    // redirect to home if already logged in
    if (isLoggedIn) history.navigate('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isLoggedIn]);

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-10">
          <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input
                    ref={userNameRef}
                    name="username"
                    type="text"
                    className="form-control "
                  />
                </div>
                <div className="form-group mb-4">
                  <label>Password</label>
                  <input
                    ref={passwordRef}
                    name="password"
                    type="password"
                    className="form-control "
                  />
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giris;
