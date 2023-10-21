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

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string("")
      .trim()
      .test(
        "email-without-spaces",
        "Email cannot contain spaces",
        (value) => !/\s/.test(value)
      )
      .email("follow this format abc123@abc.abc")
      .required("Email address is required"),
    password: yup.string(),
    // .required("Password is required*")
    // .min(8, "Password is too short - should be 8 chars minimum.")
    // .max(20, "Password is too long - should be 20 chars maximum.")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "*Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    // ),
  });

  const onSubmit = (values) => {
    console.log("values", values);
    dispatch(
      loginAction(values, () => {
        navigate("/dashboard");
      })
    );
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleForgotPasswordClick = () => {
    navigate("/");
  };
  return (
    <div className="main-div">
      <form onSubmit={formik.handleSubmit}>
        <Box className="auth-box">
          <Typography variant="h5" component="div">
            Signup
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextFieldComp
                name="email"
                placeholder={"Email"}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextFieldComp
                placeholder={"Password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextFieldComp
                placeholder={"Confirm Password"}
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <div className="error">{formik.errors.confirmpassword}</div>
                )}
            </Grid>
            <Grid item xs={12}>
              <CustomButton
                onClick={formik.handleSubmit}
                type="submit"
                children={"Sign Up"}
                variant={"contained"}
              />
            </Grid>
          </Grid>
          <Typography onClick={handleForgotPasswordClick}>
            Already have an account?
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
