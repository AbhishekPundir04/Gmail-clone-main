import React, { useEffect, useState } from "react";
import Inputs from "../../components/Input";
import CommonSelect from "../../components/select";
import { useFormik } from "formik";
import {
  addDistrictsOfficer,
  getDistrictOfficerDetails,
  updateDistrictOfficer,
} from "../../redux/action/district_offer_action/DistrictOfficerAction";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { districtListAction } from "../../redux/action/district/DistrictListAction";

const AddDistrictForms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const isEdit = location.pathname.includes("edit");
  const isView = location.pathname.includes("view");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    designation: "",
    address: "",
    districtId: "",
  };

  const onSubmit = (values) => {
    !isEdit
      ? dispatch(
          addDistrictsOfficer(values, () => {
            navigate("/district-officer");
          })
        )
      : dispatch(
          updateDistrictOfficer(id, values, () => {
            navigate("/district-officer");
          })
        );
  };

  useEffect(() => {
    (isEdit || isView) && dispatch(getDistrictOfficerDetails(id));
  }, [dispatch, id, isEdit, isView]);

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const { handleChange, values, handleSubmit, errors, touched, setFieldValue } =
    formik;


  //Working api for district List
    useEffect(() => {
      dispatch(districtListAction(venPayload));
    }, [dispatch, rowsPerPage, page]);
  
    const venPayload = {
      size: rowsPerPage,
      page: page,
    };
  
    const { districtListData } = useSelector(
      (store) => store.districtListReducer
    );
  console.log("DOnt", districtListData);

  //View and Edit

  useEffect(() => {
    (isEdit || isView) && dispatch(getDistrictOfficerDetails(id));
  }, [dispatch, id, isEdit, isView]);

  const { districtDetailsData } = useSelector(
    (store) => store.getDistrictOffcDetailsData
  );



  useEffect(() => {
    if ((isEdit || isView) && districtDetailsData) {
      setFieldValue("name", districtDetailsData.name);
      setFieldValue("email", districtDetailsData.email);
      setFieldValue("phone", districtDetailsData.phone);
      setFieldValue("designation", districtDetailsData.designation);
      setFieldValue("districtId", districtDetailsData?.districtData?.[0]?._id);
      setFieldValue("address", districtDetailsData.address);
    }
  }, [isEdit, isView, setFieldValue, districtDetailsData]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main_bx_wrapper">
          <p className="form_heading" sx={{ marginBottom: "1.5rem" }}>
            {!isEdit ? "Add New District Officer" : "Edit District Officer"}
          </p>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Inputs
                value={values.name}
                name="name"
                onChange={handleChange}
                showStar={true}
                title="District Officer Name"
                placeholder="Enter district officer name"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
            </Grid>
            <Grid item xs={6}>
              <Inputs
                value={values.email}
                name="email"
                onChange={handleChange}
                showStar={true}
                title="Email Address"
                placeholder="Enter district officer name"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
            </Grid>

            <Grid item xs={6}>
              <Inputs
                value={values.phone}
                name="phone"
                showStar={true}
                onChange={handleChange}
                title="Mobile Number"
                placeholder="Enter the phone number"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
                // onKeyPress={(event) => handleTextInput(event, 10)}
                // onInput={(e) => onlyNumbers(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <Inputs
                value={values.designation}
                name="designation"
                onChange={handleChange}
                showStar={true}
                title="Desgination"
                placeholder="Enter district officer name"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonSelect
                value={values.districtId}
                name="districtId"
                title="District"
                handleChange={handleChange}
                labelClass="labelClass"
                isMoreOptions={districtListData?.list}
                main_className="formSelectBx"
                disabled={isView}
                label="Districts"
              />
            </Grid>
            <Grid item xs={12}>
              <Inputs
                value={values.address}
                name="address"
                onChange={handleChange}
                showStar={true}
                title="Address"
                placeholder="Enter address"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
                // onKeyPress={(event) => handleTextInput(event, 30)}
              />
            </Grid>
          </Grid>

          <div className="submitCancelDualBtn" style={{ marginTop: "2rem" }}>
            <Button
              variant="outlined"
              buttonClassName="customButton cancelBtn"
              onClick={() => navigate("/manage-district-officer")}
            >
              <>
                <span>{"Cancel"}</span>
              </>
            </Button>
            <Button
              variant="contained"
              type="submit"
              buttonClassName="customButton"
            >
              <>
                <span> Update</span>
              </>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddDistrictForms;
