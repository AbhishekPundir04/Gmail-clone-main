import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, Pagination, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CommonSelect from "../../components/select";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { districtListAction } from "../../redux/action/district/DistrictListAction";
import { useDispatch, useSelector } from "react-redux";
import { blockListAction } from "../../redux/action/manage_block_list_action/ManageBlockListAction";
export default function ManageBdoTable({
  rows,
  count,
  page,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangePage,
  handleChangeSwitch,
}) {
  const navigate = useNavigate();
  const totalPages = Math.ceil(count / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage + 1;
  const dispatch = useDispatch();

  console.log(rows, "rows");

  React.useEffect(() => {
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

  React.useEffect(() => {
    dispatch(blockListAction(venPayload));
  }, [dispatch, rowsPerPage, page]);

  const { blockListData } = useSelector((store) => store.blockListReducer);
  const getBlockById = (id) => {
    let blockName = blockListData?.list?.find(
      (district) => district?._id === id
    );
    return blockName?.name;
  };
  console.log("districtName", getBlockById("655c515c86b3b78bd4aad4c0"));

  return (
    <>
      <TableContainer className="tableWrapper ">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>S.No.</TableCell> */}
              <TableCell>Name of District Officer</TableCell>
              <TableCell> Designation </TableCell>
              <TableCell> District </TableCell>
              <TableCell>Block</TableCell>
              <TableCell>Registration Date</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.length > 0 ? (
              rows?.slice(0, rows?.length).map((row, index) => {
                return (
                  <TableRow key={index}>
                    {/* <TableCell component="th" scope="row">
                      {startIndex + index}
                    </TableCell> */}
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.designation}</TableCell>
                    <TableCell>{getDistrictNameById(row.districtId)}</TableCell>
                    <TableCell>{getBlockById(row.blockId)}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <div className="actionIcon">
                        <IconButton
                          aria-label="view"
                          color="primary"
                          onClick={() =>
                            navigate(`/manage-bdo/view-bdo/${row?._id}`)
                          }
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>

                        <IconButton
                          aria-label="view"
                          color="primary"
                          onClick={() =>
                            navigate(`/manage-bdo/edit-bdo/${row?._id}`)
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
      {totalPages >= 1 && (
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
}
