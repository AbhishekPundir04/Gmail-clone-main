import { authTypes } from "../../type/auth/auth";

const initialState = {
  isLoading: false,
  adminData: null,
  msg: "",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.POST_SIGN_PENDING:
      return {
        ...state,
        isLoading: action.isLoading,
        msg: "",
      };
    case authTypes.POST_SIGN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        adminData: action.payload,
        msg: "",
      };
    case authTypes.POST_SIGN_FAILED:
      return {
        ...state,
        isLoading: action.isLoading,
        adminData: action.payload,
        msg: action.msg,
      };
    default:
      return state;
  }
};
