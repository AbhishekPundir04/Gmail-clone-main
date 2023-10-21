import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../app/layouts";
import { Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const isloggedIn = localStorage.getItem("ACCESS_TOKEN");

  return (
    <>
      {isloggedIn ? (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
