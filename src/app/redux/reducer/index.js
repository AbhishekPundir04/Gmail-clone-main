import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { districtOfficerReducer } from "./district_officer_reducer/DistrictOfficerReducer";
import { districtListReducer } from "./district/DistrictListReducer";
import { getDistrictOffcDetailsData } from "./district_officer_reducer/getDistrictOfficerDetails";

export const reducers = combineReducers({
  auth: authReducer,
  districtOfficerReducer: districtOfficerReducer,
  districtListReducer: districtListReducer,
  districtOfficerReducer: districtOfficerReducer,
  getDistrictOffcDetailsData: getDistrictOffcDetailsData,
});
