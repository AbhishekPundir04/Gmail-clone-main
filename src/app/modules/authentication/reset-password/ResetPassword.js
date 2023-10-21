import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "../../../components/TextField/TextField";
import Button from "@mui/material/Button";
import Icon from "../../../../assets/images/lock.svg";
import "../auth.scss";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { resetPassword } from "../../../redux/action/auth/authAction";
import * as yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("RESET_TOKEN", token);
    }
  }, [token]);

  // const resetPasswdSchema = yup.object({
  //   password: yup
  //     .string(`${t("valdate.pass1")}`)
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //       `${t("valdate.pass2")}`
  //     )
  //     .required(`${t("valdate.pass3")}`),
  //   cpassword: yup
  //     .string(`${t("valdate.cpass1")}`)
  //     .required(`${t("valdate.cpass2")}`)
  //     .oneOf([yup.ref("password")], `${t("valdate.cpass3")}`),
  // });

  const formik = useFormik({
    initialValues: {
      password: "",
      cpassword: "",
    },
    // validationSchema: resetPasswdSchema,
    onSubmit: (values) => {
      dispatch(
        // resetPassword(values, () => {
        //   navigate("/");
        // })
      );
    },
  });
  const { handleSubmit, getFieldProps } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1 }} className="auth_box">
          <Grid container spacing={1}>
            <Grid item lg={7} display={{ xs: "none", lg: "block" }}>
              <div className="login_image"></div>
            </Grid>
            <Grid item lg={5} xs={12} className="flex_box">
              <div className="form-div">
                <div className="logo-image1">
                  <img src="logo.png" alt="logo" />
                </div>
                <div className="login-text1">
                  <h1>{"reset_password.title"}</h1>
                </div>
                <div className="text-box2">
                  <p>{"reset_password.subtitle"}</p>
                </div>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      placeholder={"reset_password.placeholder_pass"}
                      icon={Icon}
                      type={showPassword1 ? "text" : "password"}
                      name="password"
                      {...getFieldProps("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword1}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {!showPassword1 ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      placeholder={"reset_password.placeholder_cpass"}
                      icon={Icon}
                      type={showPassword2 ? "text" : "password"}
                      name="cpassword"
                      {...getFieldProps("cpassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {!showPassword2 ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {formik.touched.cpassword && formik.errors.cpassword ? (
                      <div className="error">{formik.errors.cpassword}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <div className="login_btn_custom">
                  <Button type="submit" variant="contained">
                    {" "}
                    {"reset_password.button"}
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
