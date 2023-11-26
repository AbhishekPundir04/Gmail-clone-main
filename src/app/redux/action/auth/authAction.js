import { authTypes } from "../../type/auth/auth";
import axios, { POST } from "../../../../../src/services/api";
import { toast } from "react-toastify";
import getUniqueDeviceId from "../../../../utils/commonFunctions";

export const loginAction = (user, callback) => {
  return async (dispatch) => {
    user.deviceToken = "chbdxjbkjsfdfd" + getUniqueDeviceId.getUniqueDeviceId();
    user.deviceId = getUniqueDeviceId.getUniqueDeviceId();
    user.deviceType = "Web";
    try {
      dispatch({
        type: authTypes.POST_SIGN_PENDING,
      });
      const res = await axios.post(
        "http://15.207.106.212:5555/api/v1/auth/login",
        user,
        {
          headers: {
            // token: token,
            "x-api-key":
              "kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjkhjkshkj",
          },
        }
      );
      console.log("res", res);
      if (res?.data?.status_code === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data.result.token);
        localStorage.setItem("USERNAME", res.data.result.username);
        localStorage.setItem("roles", res.data.result.userType);
        dispatch({
          type: authTypes.POST_SIGN_SUCCESS,
          payload: res.data.result,
        });
        toast.success(res?.data?.message);
        callback();
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {}
  };
};

export const forgotPwd = (data, callback, callBackError) => {
  return async () => {
    const username = {
      username: data.username,
    };

    const res = await axios.post(
      "http://15.207.106.212:5555/api/v1/auth/forget-password",
      username,
      {
        headers: {
          // token: token,
          "x-api-key":
            "kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjkhjkshkj",
        },
      }
    );

    if (res?.data?.status_code === 200) {
      localStorage.setItem("RESET_TOKEN", res.data.result.token);
      toast.success(res?.data?.message);
      // callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};

export const resetPassword = (data, callback) => {
  return async () => {
    const token = localStorage.getItem("RESET_TOKEN");
    // const newPassword = data.password;
    const datas = {
      newPassword: data.password,
      token,
    };
    const res = await axios.post(
      "http://15.207.106.212:5555/api/v1/auth/reset-password",
      datas,
      {
        headers: {
          token: token,
          "x-api-key":
            "kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjkhjkshkj",
        },
      }
    );
    if (res?.data?.status_code === 201) {
      toast.success(res?.data?.message);
      callback();
    } else {
      toast.error(res?.data?.message);
    }
  };
};

export const logout = () => {
  return async () => {
    const res = await POST("/auth/logout");
    toast.success(res?.data?.message);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
};
