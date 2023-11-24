import { toast } from "react-toastify";
import { GET, POST, PUT } from "../../../../services/api";
import { cleanObject } from "../../../../utils/commonFunctions";
import { adminTypes } from "../../type/adminTypes";

export const blockListAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_BLOCK_DATA_PENDING,
        isLoading: true,
      });
      const cleanedPayload = cleanObject(payload);
      const res = await GET(`/common/block/get-block`, cleanedPayload);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_BLOCK_DATA_SUCCESS,
        payload: res?.data.result,
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_BLOCK_DATA_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};
