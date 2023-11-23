import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  bdoData: [],
  msg: "",
};
export const manageBdoReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_MANAGE_BDO_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_MANAGE_BDO_SUCCESS:
      return {
        ...state,
        bdoData: action.payload,
        isLoading: false,
        msg: action.msg,
        count: action.count,
      };
    case adminTypes.GET_MANAGE_BDO_FAILED:
      return {
        ...state,
        bdoData: [],
        msg: action.msg,
        isLoading: false,
      };
    default:
      return state;
  }
};
