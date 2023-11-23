import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  bdoDetailsData: [],
  msg: "",
};
export const getBdoDetailsData = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_BDO_DETAILS_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_BDO_DETAILS_SUCCESS:
      return {
        ...state,
        bdoDetailsData: action.payload,
        isLoading: false,
      };
    case adminTypes.GET_BDO_DETAILS_FAILED:
      return {
        ...state,
        bdoDetailsData: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
