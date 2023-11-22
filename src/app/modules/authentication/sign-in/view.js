import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TextFieldComp from "../../../components/TextField/TextField";
import EyeIcons from "../../../../assets/images/eye.svg";
import CustomButton from "../../../components/custombutton/CustomButton";
import * as yup from "yup";
import { loginAction } from "../../../redux/action/auth/authAction";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../auth.scss";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("*Year is required"),
    password: yup.string().required("*Cases filled is required"),
  })
  const onSubmit = (values) => {
    dispatch(
      loginAction(values, () => {
        navigate("/home");
      })
    );

    console.log("values", values);
    
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { errors, touched } = formik;

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };
  return (
    <div className="main-div">
      <form onSubmit={formik.handleSubmit}>
        <Box className="auth-box">
          <Typography variant="h4" component="div">
            Login
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextFieldComp
                name="email"
                placeholder={"Email"}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextFieldComp
                placeholder={"Password"}
                name="password"
                icon={EyeIcons}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <CustomButton
                onClick={formik.handleSubmit}
                type="submit"
                children={"Login"}
                variant={"contained"}
              />
            </Grid>
          </Grid>
          <Typography onClick={handleForgotPasswordClick}>
            Forgot Password?
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default SignIn;
