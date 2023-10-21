import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../app/modules/page-not-found";
import SignIn from "../app/modules/authentication/sign-in";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import ForgetPassword from "../app/modules/authentication/forget-password/ForgetPassword";
import ResetPassword from "../app/modules/authentication/reset-password/ResetPassword";
import Homepage from "../app/layouts/homepage/Inbox";
import SignUp from "../app/modules/authentication/signup/Signup";
import Inbox from "../app/layouts/homepage/Inbox";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/signup" element={<SignUp/>} /> */}
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/home" element={<Inbox />} />
          

        </Route>
      </Routes>
    </>
  );
}
