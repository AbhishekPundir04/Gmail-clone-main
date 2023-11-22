import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  districtDetailsData: [],
  msg: "",
};
export const getDistrictOffcDetailsData = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_DISTRICT_OFFICER_DETAILS_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_DISTRICT_OFFICER_DETAILS_SUCCESS:
      return {
        ...state,
        districtDetailsData: action.payload,
        isLoading: false,
      };
    case adminTypes.GET_DISTRICT_OFFICER_DETAILS_FAILED:
      return {
        ...state,
        districtDetailsData: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
