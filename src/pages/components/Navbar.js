import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Brand from "../../photos/Hydroptimum.png";
import Logo from "../../photos/leafs-and-drop-logo.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <header class="pt-1 mb-3 ">
        <div class="container" id="my-navbar">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
            <img src={Logo} id="logo" />
            <img src={Brand} id="brand" />

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
            <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"></div>

            <div class="dropdown text-end">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Navbar;
