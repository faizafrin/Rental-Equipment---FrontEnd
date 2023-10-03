import React from "react";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const Equipment = () => {
  return (
    <div>
      <TopBar />
      <div className="container mt-3">
        <SearchBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mt-4">
            <SideBar />
          </div>
          <div className="col-md-12 col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;