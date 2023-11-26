import React, { useEffect, useState } from "react";
import ManageBdoTable from "./ManageBdoTable";
import ManageBdoHeader from "./ManageBdoHeader";
import { useDispatch, useSelector } from "react-redux";
import { manageBdoAction } from "../../redux/action/manage_bdo_action/ManageBdoAction";
import { useDebounce } from "../../../customHooks";
const ManageBdo = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const searchResult = useDebounce(search, 1000);
  const [district, setDistrict] = useState("");

  useEffect(() => {
    dispatch(manageBdoAction(venPayload));
  }, [dispatch, page, searchResult, rowsPerPage, district]);

  const venPayload = {
    size: rowsPerPage,
    page: page,
    search: searchResult,
    districtId: district,
  };

  const bdoData = useSelector((store) => store.manageBdoReducer);

  console.log(" data", bdoData);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);

  };

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <ManageBdoHeader handleChangeSearch={handleChangeSearch} />
      <ManageBdoTable
        rows={bdoData?.bdoData?.list ?? []}
        count={bdoData?.bdoData?.count}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangeDistrict={handleChangeDistrict}
        handleChangePage={handleChangePage}
        district={district}
      />
    </div>
  );
};

export default ManageBdo;
