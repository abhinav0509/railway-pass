import React from "react";
import { Link } from "react-router-dom";
import TrainData from "../traindata.json";
import ForwardSharpIcon from "@mui/icons-material/ForwardSharp";

const SearchResult = ({ traveldate, source, destination }) => {
  return (
    <div className="container mt-2 mb-2">
      <p>Showing trains for your search..</p>
      {TrainData.map((train) => {
        return (
          <div className="card" key={train.id}>
            <div className="card-header d-flex justify-content-between">
              <h5>{train.trainname}</h5>
              <span>Duration: {train.duration}</span>
            </div>

            <div className="card-body">
              <h6 className="card-title">
                <span>Train Category: </span>
                <span className="text-muted">{train.category}</span>
              </h6>
              <div className="card-text">
                <div className="d-flex justify-content-lg-between">
                  <div>
                    Runs on{" "}
                    {train.weeklyruns.map((day) => {
                      return (
                        <span
                          key={Math.random(5000)}
                          className="mx-2 badge bg-info text-dark"
                        >
                          {day}
                        </span>
                      );
                    })}
                    {/* <span className="mx-2 badge bg-info text-dark">Wed</span>
                    <span className=" mx-2 badge bg-info text-dark">Sat</span> */}
                  </div>
                  <div>
                    <span>
                      Classes{" "}
                      <span className="mx-2 badge bg-primary">Sleeper</span>
                      <span className="mx-2 badge bg-primary">3AC</span>
                      <span className="mx-2 badge bg-primary">2AC</span>
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-lg-between">
                  <div className="mt-4">
                    <h4>
                      <span className="text-muted">Price: </span>3000 INR
                    </h4>
                  </div>
                  <div>
                    <h5>
                      {train.arrivaltime}
                      <ForwardSharpIcon className="m-2" />
                      {train.departuretime}
                    </h5>
                  </div>
                  <Link to="#" className="btn btn-primary my-4">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
