import {
  IconButton,
  Pagination,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { districtOfficerAction } from "../../redux/action/district_offer_action/DistrictOfficerAction";
import { useDispatch, useSelector } from "react-redux";
import { districtListAction } from "../../redux/action/district/DistrictListAction";
import CommonSelect from "../../components/select";

const DistrictOfficerTable = ({
  rows,
  count,
  page,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangePage,
  checked,
  handleChangeSwitch,
  district,
  handleChangeDistrict,
  handleStatusChange,
}) => {
  const navigate = useNavigate();
  const totalPages = Math.ceil(count / rowsPerPage);
  console.log("first", rows);
  const dispatch = useDispatch();

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
  console.log("districtListData", districtListData);

  const getDistrictNameById = (id) => {
    let districtName = districtListData?.list?.find(
      (district) => district?._id === id
    );
    return districtName?.name;
  };
  console.log("districtName", getDistrictNameById("655c515c86b3b78bd4aad4c0"));


  return (
    <>
      <TableContainer className="tableWrapper ">
        {/* <div className="filterBx">
          <p>Filter By</p>
          <CommonSelect
            value={district}
            name="districtId"
            title="District"
            handleChange={handleChangeDistrict}
            labelClass="labelClass"
            isMoreOptions={districtListData?.list}
            main_className="formSelectBx"
          />
        </div> */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>S.No.</TableCell> */}
              <TableCell>Name of District Officer</TableCell>
              <TableCell> Designation </TableCell>
              <TableCell> Registration Date</TableCell>
              <TableCell>District</TableCell>
              <TableCell>Email Address By</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.length > 0 ? (
              rows?.slice(0, rows?.length).map((row, index) => {
                return (
                  <TableRow key={index}>
                    {/* <TableCell>{startIndex + index}</TableCell> */}
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.designation}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{getDistrictNameById(row.districtId)}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <div className="actionIcon">
                        <IconButton
                          aria-label="view"
                          color="primary"
                          onClick={() =>
                            navigate(
                              `/district-officer/view-district-officer/${row?._id}`
                            )
                          }
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>

                        <IconButton
                          aria-label="view"
                          color="primary"
                          onClick={() =>
                            navigate(
                              `/district-officer/edit-district-officer/${row?._id}`
                            )
                          }
                        >
                          <BorderColorIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell colSpan={9} className="buttonCell">
                  No record found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPages && (
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={page}
          rowsPerPage={rowsPerPage}
          onChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </>
  );
};

export default DistrictOfficerTable;
