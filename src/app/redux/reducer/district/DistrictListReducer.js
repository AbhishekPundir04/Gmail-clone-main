import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  districtListData: [],
  msg: "",
};
export const districtListReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_DISTRICT_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_DISTRICT_DATA_SUCCESS:
      return {
        ...state,
        districtListData: action.payload,
        isLoading: false,
        msg: action.msg,
        count: action.count,
      };
    case adminTypes.GET_DISTRICT_DATA_FAILED:
      return {
        ...state,
        districtListData: [],
        msg: action.msg,
        isLoading: false,
      };
    default:
      return state;
  }
};
