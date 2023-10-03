import React, { useState, useContext } from "react";
import Slate from "./Slate";
import UserContext from "../UserContext";

const Driller = () => {
  const { categoryData } = useContext(UserContext);

  return (
    <div className="row mt-5 ">
      {categoryData.map((el, i) => {
        return <Slate key={i} data={el} />;
      })}
    </div>
  );
};

export default Driller;