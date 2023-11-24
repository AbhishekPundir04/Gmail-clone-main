import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  blockListData: [],
  msg: "",
};
export const blockListReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_BLOCK_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case adminTypes.GET_BLOCK_DATA_SUCCESS:
      return {
        ...state,
        blockListData: action.payload,
        isLoading: false,
        msg: action.msg,
        count: action.count,
      };
    case adminTypes.GET_BLOCK_DATA_FAILED:
      return {
        ...state,
        blockListData: [],
        msg: action.msg,
        isLoading: false,
      };
    default:
      return state;
  }
};
