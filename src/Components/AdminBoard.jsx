import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import { env } from "../config";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminBoard = ({ data }) => {
  const [active, setActive] = useState([]);
  const [count, setCount] = useState(0);
  const { setData } = useContext(UserContext);

  let userDelete = async (id) => {
    try {
      let response = await axios.delete(`${env.api}/Equipment/${id}`);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

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
          <Button
            as={Link}
            to={`/editEquipment/${data._id}`}
            variant="btn btn-outline-info"
          >
            Edit Equipment&nbsp;<EditIcon style={{fontSize:"medium"}}/>
          </Button>
          <br />
          <Button
            onClick={() => {
              userDelete(data._id);
            }}
            className="mt-3"
            variant="btn btn-outline-info"
          >
            Delete<DeleteIcon/>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdminBoard;