import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import NoInternetPng from "../assets/images/noInter.png";

export const changesISODateToNormal = (date) => {
  let newdate = date;
  let dates = new Date(date);
  let year = dates.getFullYear();
  let month = dates.getMonth() + 1;
  let dt = dates.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${dt}-${month}-${year}`;
};

export const formatDate = (date) => {
  return moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD-MM-YYYY");
};

export const truncateDescription = (description) => {
  if (description?.length > 30) {
    return description.substring(0, 30) + "" + "...";
  }
  return description;
};

export const truncateTitle = (title) => {
  if (title?.length > 30) {
    return title.substring(0, 30) + "" + "...";
  }
  return title;
};

export const handleTextInput = (event, size) => {
  const value = event.target.value;
  if (value.length >= size) {
    event.preventDefault();
    event.stopPropagation();
  }
};
export const onlyCharacters = (event) => {
  const regex = /^[A-Za-z\s\b]+$/;
  const key = String.fromCharCode(event.keyCode);
  if (!regex.test(key)) {
    event.preventDefault();
  }
};
export const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export const getPdfUrl = (url) => {
  const refinedUrl = decodeURIComponent(url)
    ?.split("/")[4]
    ?.slice(
      decodeURIComponent(url)?.split("/")[4].indexOf("_") + 1,
      decodeURIComponent(url)?.split("/")[4].indexOf(".pdf")
    );
  return refinedUrl;
};
// export const restrictSpecialCharacters = (event) => {
//   const input = event.target.value;
//   const alphanumericRegex = /^[a-zA-Z0-9]*$/;
//   if (!alphanumericRegex.test(input)) {
//     event.target.value = input.slice(0, -1);
//   }
// };

const getUniqueDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = uuid();
    localStorage.setItem("deviceId", deviceId);
  }

  return deviceId;
};

export function cleanObject(obj) {
  const cleanedObj = { ...obj }; // create a copy of the object to avoid mutating the original object
  for (let key in cleanedObj) {
    if (
      cleanedObj[key] === "" ||
      cleanedObj[key] === " " ||
      cleanedObj[key] === [] ||
      /^\s+$/.test(cleanedObj[key])
    ) {
      delete cleanedObj[key];
    }
  }
  return cleanedObj;
  // const cleanedPayload = cleanObject(complainPayload);
}

export const NoInternetConnection = (props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  } else {
    return (
      <div className="connection-background">
        <div>
          <img src={NoInternetPng} alt="No internet connection" />
        </div>
        <p>
          No internet connection. You will not be able to use the application in
          the meantime.
        </p>
      </div>
    );
  }
};

export default {
  getUniqueDeviceId,
};
