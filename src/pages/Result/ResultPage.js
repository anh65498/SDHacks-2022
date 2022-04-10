import React from "react";
import "./Result.css";
// import Map from "../components/Map";
import Thermometer from "../../photos/Thermometer.png";
import Droplet from "../../photos/droplet.png";
import Rain from "../../photos/Rain.png";
import Map from "../../photos/map.png";
import Report from "../../photos/report.png";

const Result = () => {
  return (
    <React.Fragment>
      <div class="container-fluid my-container">
        <div class="row justify-content-start">
          <div class="col-1 left-side-bar">{/* LeftSidebar */}</div>
          <div class="col main-content">
            <div class="container backdrop">
              {/* Title */}
              <h1>Optimize your water usage</h1>
              <h6>Helping you take the right decision at correct time</h6>
              {/* Cards */}
              <div class="row my-cards">
                {/* Air Temp */}
                <div class="card col my-card temp-card">
                  <img src={Thermometer} />
                  <h5 class="card-title">
                    <span class="temp">+24</span>
                    <span>&#8451;</span>
                  </h5>
                  <div class="row">
                    <div class="col-6">
                      {" "}
                      {/* magic number */}
                      <h6 class="card-subtitle mb-2 text-muted">Air Temp</h6>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-outline-dark result-btn"
                      >
                        Good
                      </button>
                    </div>
                  </div>
                </div>
                {/* Soil Moisture */}
                <div class="card col my-card humidity-card">
                  <img src={Droplet} />
                  <h5 class="card-title">
                    <span class="humidity">72</span>%
                  </h5>
                  <div class="row">
                    <div class="col-6">
                      {" "}
                      {/* magic number */}
                      <h6 class="card-subtitle mb-2 text-muted">Humidity</h6>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-outline-dark result-btn"
                      >
                        High
                      </button>
                    </div>
                  </div>
                </div>
                {/* Precipitation */}
                <div class="card col my-card precipitation-card">
                  <img src={Rain} />
                  <h5 class="card-title">
                    <span class="precipitation">-2</span>mm
                  </h5>
                  <div class="row">
                    <div class="col-6">
                      {" "}
                      {/* magic number */}
                      <h6 class="card-subtitle mb-2 text-muted">
                        Precipitation
                      </h6>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-outline-dark result-btn"
                      >
                        Low
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end of backdrop */}
              {/* Map */}
              <div class="row my-map mt-4">
                <h3>Manage your fields</h3>
                <h6>Select the area on the figure to plot</h6>
                {/* <a href="https://codesandbox.io/s/leaflet-hydroptimum-d6skuh?file=/src/components/Geoman.js"> */}
                <img src={Map} id="left" />
                {/* </a> */}
                {/* Easy way out: Have a button that go to a new page */}
                {/* Hard way: change the CSS of the map */}
                {/* <div class="map-map">
                    <Map />
                  </div> */}

                {/* <a href="https://codesandbox.io/s/leaflet-hydroptimum-d6skuh?file=/src/components/Geoman.js"> */}
                <img src={Report} id="right" />
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 right-side-bar">{/* Right Sidebar */}</div>
      </div>
    </React.Fragment>
  );
};

export default Result;
