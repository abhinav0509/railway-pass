import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ForwardSharpIcon from "@mui/icons-material/ForwardSharp";
import BasicDatePicker from "../utils/BasicDatePicker";
import { Redirect } from "react-router-dom";
import SearchResult from "./SearchResult";
import LinearProgress from "@material-ui/core/LinearProgress";

const SearchTrain = ({ props }) => {
  const indianStations = [
    { label: "New Delhi", stationcode: "NDLS" },
    { label: "Mumbai", stationcode: "MUM" },
    { label: "Goa", stationcode: "GOA" },
    { label: "Chennai", stationcode: "CHN" },
    { label: "Ranchi", stationcode: "RNC" },
  ];

  const [source, setSource] = useState("New Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [traveldate, setTravelDate] = useState("2/2/2022");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(source.label);
    //console.log(destination.label);
    setSource(source.label);
    setDestination(destination.label);
    setIsSubmitted(true);
  };
  const getDate = (date) => {
    //const traveldate = date;
    const dateOfTravel = new Date(date);
    const formattedDate =
      dateOfTravel.getDate() +
      "/" +
      dateOfTravel.getMonth() +
      1 +
      "/" +
      dateOfTravel.getFullYear();
    setTravelDate(formattedDate);
    console.log(dateOfTravel);
    console.log(formattedDate);
  };

  return (
    <>
      <div
        className="container d-flex bg-light mt-4 p-2 rounded-2 justify-content-center align-content-center"
        style={{ height: "180px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-wrap">
            <h6 className="col-1 p-1">Plan Your Travel</h6>

            <Autocomplete
              onChange={(e, value) => setSource(value)}
              disablePortal
              id="combo-box-demo"
              options={indianStations}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Enter Origin" />
              )}
              className="col-2"
            />
            <span className="m-3">
              <ForwardSharpIcon />
            </span>

            <Autocomplete
              onChange={(e, value) => setDestination(value)}
              disablePortal
              id="combo-box-demo"
              options={indianStations}
              sx={{ width: 300 }}
              className="col-2"
              renderInput={(params) => (
                <TextField {...params} label="Enter Destination" />
              )}
            />

            <span></span>
            <BasicDatePicker fetchDate={getDate} />

            <button
              type="submit"
              className="btn mt-5 mx-auto btn-primary col-2 m-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <SearchResult
          source={source}
          destination={destination}
          traveldate={traveldate}
        />
      )}
    </>
  );
};

export default SearchTrain;
