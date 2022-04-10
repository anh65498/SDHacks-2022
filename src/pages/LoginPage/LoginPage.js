import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "./loginpage.css";
import db, { provider2 } from "../../firebase/config";

const LoginPage = () => {
  const [isAuth, setAuth] = useState(false);
  // const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    try {
      db.auth()
        .signInWithPopup(provider2)
        .then((result) => {
          // runs even if sign up fails
          alert("loggin in!");
        })
        .then(() => {
          setAuth(true);
        });
      setAuth(true);
    } catch (error) {
      alert(error);
    }
  };

  // {
  //   console.log(isAuth);
  //   isAuth && <Navigate replace to="/ " />;
  // }

  useEffect(() => {
    isAuth && <Navigate replace to="/ " />;
  });
  return (
    <div className="container wrapper">
      <div className="jumbotron">
        <div className="row">
          <div className="col-lg-12">
            <div id="introduction-banner">
              <h1>Login</h1>
              <button
                onClick={handleLoginWithGoogle}
                className="btn btn-primary my-btn"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
