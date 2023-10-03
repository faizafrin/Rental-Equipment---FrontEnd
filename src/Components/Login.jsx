import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import icon from "../Assets/icon.png";
import UserContext from "../UserContext";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { useFormik } from "formik";
import { env } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let context = useContext(UserContext);
  let navigate = useNavigate();
  const { setUser, admin, setAdmin, setUserName } = useContext(UserContext);
  const [checkAdmin, setCheckAdmin] = useState(false);

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      AdminKey: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        if (loginData.status === 200) {
          window.localStorage.setItem(
            "app-token",
            loginData.data.userValues.token
          );
          if (values.AdminKey) {
            window.localStorage.setItem("Admin", values.AdminKey);
            setAdmin(true);
          }

          window.localStorage.setItem("user", loginData.data.userValues.name);
          setUser(values);
          navigate("/equipment");
        } else {
          navigate("/notfound");
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });
  const paperStyle = {
    padding: 20,
    height: "85vh",
    width: 320,
    margin: "20px auto",
  };

  const btStyle = {
    margin: "8px 0",
  };
  return (
    <div className="login">
    <Grid>
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img style={{ width: "100px" }} src={icon} />
            <h2>Login in</h2>
            <AddHomeIcon />
          </Grid>
          <TextField
            className="mt-3"
            label="Enter Email"
            placeholder="Enter Email"
            fullWidth
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
          <TextField
            className="mt-3"
            label="Password"
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />

          {checkAdmin && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="AdminKey"
              label="adminKey"
              type="text"
              id="adminKey"
              value={formik.values.AdminKey}
              onChange={formik.handleChange}
            />
          )}
          <span>
            < Checkbox onClick={() => setCheckAdmin(!checkAdmin)} /> Click if
            Admin
          </span>
          <Button
            type="submit"
            variant="contained"
            style={btStyle}
            color="primary"
            fullWidth
          >
            Sign in
          </Button>

          <Typography>
            Do you have an account ?<Link href="/signup">Sign up</Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
    </div>
  );
};

export default Login;