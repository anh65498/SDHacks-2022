import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Brand from "../../photos/Hydroptimum.png";
import Logo from "../../photos/leafs-and-drop-logo.png";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div
        class="d-flex flex-column flex-shrink-0 bg-light"
        style="width: 4.5rem;"
      >
        <a
          href="/"
          class="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg class="bi" width="40" height="32" />
          <span class="visually-hidden">Icon-only</span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link active py-3 border-bottom"
              title="leaf"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg class="bi" width="24" height="24" role="img"></svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 border-bottom"
              title="water"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg class="bi" width="24" height="24" role="img"></svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3 border-bottom"
              title="gear"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg class="bi" width="24" height="24" role="img"></svg>
            </a>
          </li>
        </ul>
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
