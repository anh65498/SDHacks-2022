import React from "react";
import "./loginpage.css";
import db, { provider2 } from "../../firebase/config";

const LoginPage = () => {
  const handleLoginWithGoogle = () => {
    try {
      db.auth().signInWithPopup(provider2);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    // <div className="wrapper d-flex flex-column align-items-center">
    //   <div className="content">
    //     <h1 id="title">Login</h1>
    //     <button onClick={handleLoginWithGoogle} className="btn btn-primary">
    //       Log In with Google
    //     </button>
    //   </div>
    // </div>

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
