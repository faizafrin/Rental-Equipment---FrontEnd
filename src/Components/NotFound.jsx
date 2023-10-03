import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound text-center">
      <div className="error">
        <h1>Sorry</h1>
        <h2>Credentials Wrong</h2>
      </div>
      <Button onClick={() => navigate("/")} type="submit" color="secondary">
        Go to signup
      </Button>
    </div>
  );
};

export default NotFound;