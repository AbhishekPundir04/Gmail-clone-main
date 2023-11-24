import { toast } from "react-toastify";
import { GET, POST, PUT } from "../../../../services/api";
import { cleanObject } from "../../../../utils/commonFunctions";
import { adminTypes } from "../../type/adminTypes";

export const manageBdoAction = (payload) => {
  console.log("Action", payload);
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_MANAGE_BDO_PENDING,
        isLoading: true,
      });
      const cleanedPayload = cleanObject(payload);
      const res = await GET(`/common/bdo/get-bdo`, cleanedPayload);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_MANAGE_BDO_SUCCESS,
        payload: res?.data.result,
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_MANAGE_BDO_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};

export const addBdo = (values, callback) => {
  return async () => {
    const users = {
      ...values,
      cond: "ADD",
    };
    const cleanedPayload = cleanObject(users);
    const res = await POST(`common/bdo/add-edit-bdo`, cleanedPayload);
    if (res?.data?.status_code === 200) {
      toast.success(res?.data?.message);
      callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};

export const updateBdo = (id, values, callback) => {
  return async () => {
    const users = {
      ...values,
      cond: "EDIT",
      bdoId: id,
    };
    const cleanedPayload = cleanObject(users);
    const res = await POST(`common/bdo/add-edit-bdo`, cleanedPayload);
    if (res?.data?.status_code === 200) {
      toast.success(res?.data?.message);
      callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};

export const getBdoDetails = (reId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_BDO_DETAILS_PENDING,
        isLoading: true,
      });
      const reqId = `bdoId=${reId}`;
      const res = await GET(`common/bdo/get-bdo-detail/?${reqId}`);
      dispatch({
        type: adminTypes.GET_BDO_DETAILS_SUCCESS,
        payload: res?.data.result ?? [],
        isLoading: false,
        msg: res.data.message ?? "",
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_BDO_DETAILS_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};
