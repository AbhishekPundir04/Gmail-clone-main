import React, { useEffect, useState } from "react";
import DistrictOfficerHeader from "./DistrictOfficerHeader";
import DistrictOfficerTable from "./DistrictOfficerTable";
import { useDispatch, useSelector } from "react-redux";
import { districtOfficerAction } from "../../redux/action/district_offer_action/DistrictOfficerAction";
import { useDebounce } from "../../../customHooks";
const DistrictOfficer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const searchResult = useDebounce(search, 1000);
  const [district, setDistrict] = useState("");


  useEffect(() => {
    dispatch(districtOfficerAction(venPayload));
  }, [dispatch, page]);

  const districtData = useSelector((store) => store.districtOfficerReducer);
  console.log(districtData);

  const venPayload = {
    size: rowsPerPage,
    page: page,
    search: searchResult,
    districtId: district,
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      <DistrictOfficerHeader handleChangeSearch={handleChangeSearch} />
      <DistrictOfficerTable
        rows={districtData?.districtData?.list ?? []}
        count={districtData?.districtData?.count}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};

export default DistrictOfficer;
