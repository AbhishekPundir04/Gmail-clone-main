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
import React from "react";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const DistrictOfficerTable = ({ rows,
  count,
  page,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangePage,
  checked,
  handleChangeSwitch,
  district,
  handleChangeDistrict,
  handleStatusChange, }) => {
  const navigate = useNavigate();
  const totalPages = Math.ceil(count / rowsPerPage);
  console.log("first", rows);

  return (
    <>
      <TableContainer className="tableWrapper ">
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
                    <TableCell>{row.districtId}</TableCell>
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
      <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={page}
          rowsPerPage={rowsPerPage}
          onChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
  );
};

export default DistrictOfficerTable;
