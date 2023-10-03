import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const Board = ({ style, title, desc, but, ima, imaStyle }) => {
  return (
    <Card style={{ width: { style } }}>
      <Card.Img style={{ width: { imaStyle } }} variant="top" src={ima} />
      <Card.Body>
        <Card.Title style={{ fontSize: "4vw" }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: "2vw" }}>{desc}</Card.Text>
        <Button as={Link} to="/equipment" variant="primary">
          {but}<BookmarkAddIcon/>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Board;