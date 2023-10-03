import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminBoard from "../Components/AdminBoard";
import TopBar from "../Components/TopBar";
import UserContext from "../UserContext";
import axios from "axios";
import { env } from "../config";
const Admin = () => {
  const { data, setData } = useContext(UserContext);
  useEffect(() => {
    getEquipment();
  }, []);

  let getEquipment = async () => {
    try {
      let response = await axios.get(`${env.api}/Equipments`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <TopBar />
      <div className="container">
        <Link to="/addEquipment" type="button" className="btn btn-primary mt-4">
          Add Equipment
        </Link>
        <Link to="/order" type="button" className="btn btn-primary mt-4 mx-3">
          Order Page
        </Link>
      </div>
      <div className="container">
        <div className="row mt-5 ">
          {data.map((el, i) => {
            return <AdminBoard key={i} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;