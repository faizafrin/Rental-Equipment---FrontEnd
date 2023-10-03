import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import TopBar from "../Components/TopBar";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../config";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

const AddEquipment = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { setData } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Image: "",
      Price: "",
      Category: "",
      About: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.Name === "") {
        errors.Name = "Please enter a user name ";
      }
      if (values.Image === "") {
        errors.Image = "Please enter Image";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/Equipment`, values);
      alert("Equipment Created");
      setData(user.data);
      navigate("/admin");
    },
  });
  return (
    <>
      <TopBar />
      <Form onSubmit={formik.handleSubmit} className="container">
        <div className="mb-3"></div>
        <h3>Add Equipment</h3>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
            type="text"
            placeholder="Enter name"
          />
          <span style={{ color: "red" }}>{formik.errors.Name}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            value={formik.values.Image}
            onChange={formik.handleChange}
            name="Image"
            type="text"
            placeholder="Image source"
          />
          <span style={{ color: "red" }}>{formik.errors.Image}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price for the Equipment</Form.Label>
          <Form.Control
            value={formik.values.Price}
            onChange={formik.handleChange}
            name="Price"
            type="text"
            placeholder="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={formik.values.Category}
            onChange={formik.handleChange}
            name="Category"
            type="text"
            placeholder="Category"
          />
          <Form.Text className="text-muted">
            Strictly Use the Keywords as Crusher,Cranes,Loader and Equipment
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <textarea
            value={formik.values.About}
            onChange={formik.handleChange}
            name="About"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="About"
          ></textarea>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddEquipment;