import { toast } from "react-toastify";
import { GET, POST, PUT } from "../../../../services/api";
import { cleanObject } from "../../../../utils/commonFunctions";
import { adminTypes } from "../../type/adminTypes";

export const districtListAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_DISTRICT_DATA_PENDING,
        isLoading: true,
      });
      const cleanedPayload = cleanObject(payload);
      const res = await GET(`/common/district/get-district`, cleanedPayload);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_DISTRICT_DATA_SUCCESS,
        payload: res?.data.result,
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_DISTRICT_DATA_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};
