import { toast } from "react-toastify";
import { GET, POST, PUT } from "../../../../services/api";
import { cleanObject } from "../../../../utils/commonFunctions";
import { adminTypes } from "../../type/adminTypes";

export const districtOfficerAction = (payload) => {
  console.log("Action", payload);
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_PENDING,
        isLoading: true,
      });
      const cleanedPayload = cleanObject(payload);
      const res = await GET(`/admin/do/get-do`, cleanedPayload);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_SUCCESS,
        payload: res?.data.result,
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};

export const addDistrictsOfficer = (values, callback) => {
  return async () => {
    const users = {
      name: values.name,
      cond: "ADD",
      email: values.email,
      phone: values.phone,
      designation: values.designation,
      address: values.address,
      districtId: values.districtId,
    };
    const cleanedPayload = cleanObject(users);
    const res = await POST(`admin/do/add-edit-do`, cleanedPayload);
    if (res?.data?.status_code === 200) {
      toast.success(res?.data?.message);
      callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};

export const updateDistrictOfficer = (id, values, callback) => {
  return async () => {
    const users = {
      name: values.name,
      cond: "EDIT",
      email: values.email,
      phone: values.phone,
      designation: values.designation,
      address: values.address,
      districtId: values.districtId,
      doId: id,
    };
    const cleanedPayload = cleanObject(users);
    const res = await POST(`admin/do/add-edit-do`, cleanedPayload);
    if (res?.data?.status_code === 200) {
      toast.success(res?.data?.message);
      callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};


export const getDistrictOfficerDetails = (reId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_DETAILS_PENDING,
        isLoading: true,
      });
      const reqId = `doId=${reId}`;
      const res = await GET(`common/do/get-do-detail/?${reqId}`);
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_DETAILS_SUCCESS,
        payload: res?.data.result ?? [],
        isLoading: false,
        msg: res.data.message ?? "",
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_DISTRICT_OFFICER_DETAILS_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};

