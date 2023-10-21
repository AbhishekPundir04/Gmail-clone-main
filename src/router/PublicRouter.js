import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PublicRouter() {
  const isloggedIn = false;

  return <> {isloggedIn ? <Navigate to="/home" /> : <Outlet />}</>;
}
