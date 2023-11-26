import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Inputs from "../../../components/Input";
import "../auth.scss";
import Input from "../../../components/InputField/input";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action/auth/authAction";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const signInValidation = yup.object().shape({
    email: yup
      .string()
      .email("*Invalid email address")
      .required("*Email is required"),
    password: yup
      .string()
      .min(8, "*Password must be at least 8 characters")
      .required("*Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("values", values);
    dispatch(
      loginAction(values,()=>{
        navigate("/district-officer/add-district-officer")
      })
    )


  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    signInValidation,
  });

  const { handleChange, values, handleSubmit, errors, touched } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} display={{ xs: "none", lg: "block" }}>
              <div className="backgroundBx">
                <div className="login_image"></div>
              </div>
            </Grid>
            <Grid item style={{ padding: 0 }} lg={6} xs={12}>
              <div style={{ marginLeft: "79px", marginBottom: "30px" }}>
                <Typography variant="h4">Login </Typography>
              </div>
              <div className="form-div">
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      title="Email"
                      placeholder="Please Enter your email"
                      fullWidth
                    />
                    {touched.email && errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name="password"
                      value={values.password}
                      title="Password"
                      onChange={handleChange}
                      placeholder="Please Enter your password"
                      fullWidth
                    />
                    {touched.password && errors.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </Grid>
                  <div className="button_div">
                    <Button variant="contained" type="submit" fullWidth>
                      Login
                    </Button>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default SignIn;
