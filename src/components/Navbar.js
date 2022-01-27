import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-item nav-link active fw-bold fs-4" to="/">
        RailPass
      </NavLink>
      <NavLink className="nav-item nav-link" to="/search">
        Search
      </NavLink>
      <NavLink className="nav-item nav-link" to="/checkpnr">
        Check PNR
      </NavLink>
      <NavLink className="nav-item nav-link" to="/help">
        Help
      </NavLink>
    </nav>
  );
};

export default Navbar;
