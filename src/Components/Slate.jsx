import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const Slate = ({ data }) => {
  let context = useContext(UserContext);
  const { user } = useContext(UserContext);
  return (
    <>
      <Card className="col-md-3 m-auto mb-4" style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "15rem", height: "15rem" }}
          className="mt-3"
          variant="top"
          src={data.Image}
        />
        <Card.Body>
          <Card.Title>{data.Name}</Card.Title>
          {user ? (
            <Button
              as={Link}
              to={`/equipment/driller/${data._id}`}
              variant="btn btn-outline-info"
            >
              {" "}
              Add to Enquiry <BookmarkAddIcon/>
            </Button>
          ) : (
            <Button as={Link} to={`/login`} variant="btn btn-outline-info">
              Add to Enquiry
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Slate;