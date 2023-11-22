import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  districtData: [],
  msg: "",
};
export const districtOfficerReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_DISTRICT_OFFICER_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_DISTRICT_OFFICER_SUCCESS:
      return {
        ...state,
        districtData: action.payload,
        isLoading: false,
        msg: action.msg,
        count: action.count,
      };
    case adminTypes.GET_DISTRICT_OFFICER_FAILED:
      return {
        ...state,
        districtData: [],
        msg: action.msg,
        isLoading: false,
      };
    default:
      return state;
  }
};
