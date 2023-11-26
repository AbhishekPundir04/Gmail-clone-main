import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   addBdo,
//   getBdoDetails,
//   updateBdo,
// } from "../../../redux/action/ManageBdo/ManageBdoAction";
import Inputs from "../../components/Input";
import CommonSelect from "../../components/select";
import {
  addBdo,
  getBdoDetails,
  updateBdo,
} from "../../redux/action/manage_bdo_action/ManageBdoAction";
import { districtListAction } from "../../redux/action/district/DistrictListAction";
import { blockListAction } from "../../redux/action/manage_block_list_action/ManageBlockListAction";

const AddBdoForms = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  const isView = location.pathname.includes("view");
  const { id } = useParams();

  const addBdoValidation = yup.object().shape({
    name: yup
      .string()
      .min(3, `*Officer Name must be at least 3 characters`)
      .max(30, "*Officer Name must be less than 30 characters")
      .required("*Officer Name is required")
      .trim(),
    email: yup.string().required("*Email is required"),
    phone: yup.string("").required("*Mobile number is required"),
    designation: yup.string().required("*Designation is required"),
    districtId: yup.string().required("*District is required"),
    blockId: yup.string().required("*Block Name is required"),
    address: yup.string().required("*Address is required"),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    designation: "",
    address: "",
    districtId: "",
    blockId: "",
  };

  const onSubmit = (values) => {
    !isEdit
      ? dispatch(
          addBdo(values, () => {
            navigate("/manage-bdo");
          })
        )
      : dispatch(
          updateBdo(id, values, () => {
            navigate("/manage-bdo");
          })
        );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema: addBdoValidation,
  });
  const { handleChange, values, handleSubmit, errors, touched, setFieldValue } =
    formik;

  const venPayload = {
    size: rowsPerPage,
    page: page,
  };

  const handleDistrictChange = (e) => {
    setFieldValue("districtId", e.target.value);
    const updatedVenPayload = {
      ...venPayload,
      districtId: e.target.value,
    };
    dispatch(blockListAction(updatedVenPayload));
  };

  useEffect(() => {
    dispatch(districtListAction(payload));
  }, [dispatch, rowsPerPage, page]);

  const payload = {
    size: rowsPerPage,
    page: page,
  };

  const { districtListData } = useSelector(
    (store) => store.districtListReducer
  );

  const { blockListData } = useSelector((store) => store.blockListReducer);

  useEffect(
    (id) => {
      (isEdit || isView) && dispatch(getBdoDetails(id));
    },
    [dispatch, id, isEdit, isView]
  );

  const { bdoDetailsData } = useSelector((store) => store.getBdoDetailsData);

  useEffect(() => {
    if ((isEdit || isView) && bdoDetailsData) {
      setFieldValue("name", bdoDetailsData.name);
      setFieldValue("email", bdoDetailsData.email);
      setFieldValue("phone", bdoDetailsData.phone);
      setFieldValue("designation", bdoDetailsData.designation);
      setFieldValue("districtId", bdoDetailsData?.districtData?.[0]?._id);
      setFieldValue("blockId", bdoDetailsData?.blockData?.[0]?._id);
      setFieldValue("address", bdoDetailsData.address);
    }
  }, [isEdit, isView, setFieldValue, bdoDetailsData]);

  const handleBlockChange = (e) => {
    setFieldValue("blockId", e.target.value);
    const updatedVenPayload = {
      ...venPayload,
      blockId: e.target.value,
    };
    dispatch(blockListAction(updatedVenPayload));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main_bx_wrapper">
          <p className="form_heading" sx={{ marginBottom: "1.5rem" }}>
            {!isEdit ? " Add BDO" : " Edit BDO"}
          </p>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Inputs
                value={values.name}
                name="name"
                onChange={handleChange}
                showStar={true}
                title="BDO Name"
                placeholder="Enter district officer name"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </Grid>

            <Grid item xs={6}>
              <Inputs
                value={values.email}
                name="email"
                showStar={true}
                onChange={handleChange}
                title="Email Address"
                placeholder="Enter email address"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </Grid>
            <Grid item xs={6}>
              <Inputs
                value={values.phone}
                name="phone"
                showStar={true}
                onChange={handleChange}
                title="Mobile Number"
                placeholder="Enter mobile number"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
              {touched.phone && errors.phone && (
                <div className="error">{errors.phone}</div>
              )}
            </Grid>
            <Grid item xs={6}>
              <Inputs
                value={values.designation}
                name="designation"
                showStar={true}
                onChange={handleChange}
                title="Designation"
                placeholder="Enter the phone number"
                istextField={true}
                labelClassTextfield="labelClassTextfield"
                disabled={isView}
              />
              {touched.designation && errors.designation && (
                <div className="error">{errors.designation}</div>
              )}
            </Grid>
            <Grid item xs={6}>
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
              />
              {touched.address && errors.address && (
                <div className="error">{errors.address}</div>
              )}
            </Grid>
            <Grid item xs={6}>
              <CommonSelect
                selectedValue={values.districtId}
                name="districtId"
                title="District"
                handleChange={handleDistrictChange}
                labelClass="labelClass"
                isMoreOptions={districtListData?.list}
                main_className="formSelectBx"
                label="Districts"
              />
              {touched.districtId && errors.districtId && (
                <div className="error">{errors.districtId}</div>
              )}
            </Grid>
            <Grid item xs={6}>
              <CommonSelect
                selectedValue={values.blockId}
                name="blockId"
                title="Block Name"
                handleChange={handleBlockChange}
                labelClass="labelClass"
                isMoreOptions={blockListData?.list}
                main_className="formSelectBx"
                label="Block"
              />
              {touched.blockId && errors.blockId && (
                <div className="error">{errors.blockId}</div>
              )}
            </Grid>
          </Grid>
          {!isView && (
            <div className="submitCancelDualBtn" style={{ marginTop: "2rem" }}>
              <Button
                variant="outlined"
                buttonClassName="customButton cancelBtn"
                onClick={() => navigate("/manage-bdos")}
              >
                <>
                  <span>{"Cancel"}</span>
                </>
              </Button>
              <Button
                variant="contained"
                type={"submit"}
                buttonClassName="customButton"
              >
                <>
                  <span>{!isEdit ? "Save" : "Update"}</span>
                </>
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default AddBdoForms;
