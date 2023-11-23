import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { districtOfficerReducer } from "./district_officer_reducer/DistrictOfficerReducer";
import { districtListReducer } from "./district/DistrictListReducer";
import { getDistrictOffcDetailsData } from "./district_officer_reducer/getDistrictOfficerDetails";
import { manageBdoReducer } from "./manage_bdo_reducer/ManageBdoReducer";
import { getBdoDetailsData } from "./manage_bdo_reducer/GetBdoDetails";

export const reducers = combineReducers({
  auth: authReducer,
  districtOfficerReducer: districtOfficerReducer,
  districtListReducer: districtListReducer,
  districtOfficerReducer: districtOfficerReducer,
  getDistrictOffcDetailsData: getDistrictOffcDetailsData,
  manageBdoReducer: manageBdoReducer,
  getBdoDetailsData:getBdoDetailsData,
  
});
