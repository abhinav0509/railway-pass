import React from "react";
import { Link } from "react-router-dom";
import RailImage from "../images/Indian-Railways.webp";

import SearchTrain from "./SearchTrain";

const Hero = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Rail Pass System</h1>
            <p className="lead">
              Welcome to RailPass.You can book your railtickets here easily at
              best rates.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link
                to="/search"
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Search Trains
              </Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={RailImage} alt="toyota" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
