import * as React from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BasicDatePicker({ fetchDate }) {
  const [traveldate, setTravelDate] = React.useState(null);
  //console.log("props", props);
  //console.log(traveldate);
  useEffect(() => {
    fetchDate(traveldate);
  }, [traveldate]);

  return (
    <div className="col-3 mx-4">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={traveldate}
          onChange={(newValue) => {
            setTravelDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
