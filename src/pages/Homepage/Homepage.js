import React from "react";
import { Navigate, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container wrapper">
        <div id="greetings">
          <h1>
            Hey <span class="username">Anh</span>, 👋🏻
          </h1>
          <h4>Fill out the following details mentioned ...</h4>
        </div>
        <form class="container my-container">
          {/* location input field */}
          <div class="row mb-5">
            <div class="col-2">
              <label for="location" class="col-form-label">
                Enter your Location
              </label>
            </div>
            <div class="col-4 ">
              <div class="input-group mb-3">
                <input
                  id="location"
                  type="text"
                  class="form-control"
                  placeholder="9450 Gilman Drive, La Jolla, CA 92092-0100"
                />
                <button
                  class="btn btn-outline-secondary hp-button"
                  type="button"
                  id="button-addon2"
                >
                  Bu
                </button>
              </div>
            </div>
            {/*separation*/}
            <div class="col-2"> </div>

            {/*type of soil*/}
            <div class="col-1">
              <label for="soil-type" class="col-form-label">
                Soil Type
              </label>
            </div>
            <div class="col-1">
              <div class="input-group 5">
                <select class="form-select" id="soil-type">
                  <option selected>Clay</option>
                  <option value="1">Loam</option>
                  <option value="2">Sand</option>
                  <option value="3">Silt</option>
                </select>
              </div>
            </div>
          </div>{" "}
          {/*row */}
          {/* Crop Type input field */}
          <div class="row mb-5">
            <div class="col-2">
              <label for="crop" class="col-form-label">
                Type of Crop
              </label>
            </div>
            <div class="col-4 ">
              <div class="input-group mb-3">
                <input
                  id="crop"
                  type="text"
                  class="form-control"
                  placeholder="Corn"
                />
                <button
                  class="btn btn-outline-secondary hp-button"
                  type="button"
                  id="button-addon2"
                >
                  Bu
                </button>
              </div>
            </div>
          </div>
          {/* Used Water input field */}
          <div class="row mb-5">
            <div class="col-2">
              <label for="water" class="col-form-label">
                Water Used
              </label>
            </div>
            <div class="col-4 ">
              <div class="input-group mb-3">
                <input
                  id="water"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="10"
                />
                <button
                  class="btn btn-outline-secondary hp-button"
                  type="button"
                  id="button-addon2"
                >
                  Bu
                </button>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <button type="submit" class="btn btn-lg submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
