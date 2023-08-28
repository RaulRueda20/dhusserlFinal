import axios from "axios";
import * as localStore from "./localStore";
//const serverUrl = "http://18.119.90.126:1938/api/v1.0";
const serverUrl = "http://localhost:1938/api/v1.0";
//const serverUrl = "https://diccionariohusserl.org/api/v1.0";

const webService = (service, method, params, sesion, next) => {
  var serverUsername = localStore.getObjects("sesion").user;
  var serverPassword = localStore.getObjects("sesion").password;

  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);

  axios({
    method: method,
    url: serverUrl + service,
    data: params,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.data.status !== 200) {
        alert(response.data.error);
      } else next(response);
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("Ha ocurrido un error en el servidor: " + error);
    });
};

const webServiceAsync = async (service, method, params, sesion) => {
  var serverUsername = localStore.getObjects("sesion").user;
  var serverPassword = localStore.getObjects("sesion").password;
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  try {
    const response = await axios({
      method: method,
      url: serverUrl + service,
      data: params,
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });

    if (response.data.status !== 200) {
      alert(response.data.error);
    } else return response;
  } catch (error) {
    console.log(error);
    alert("Ha ocurrido un error en el servidor: " + error);
  }
};

const adminService = (service, method, params, next) => {
  var serverUsername = localStore.getObjects("admin_sesion").email;
  var serverPassword = localStore.getObjects("admin_sesion").user_password;
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  axios({
    method: method,
    url: serverUrl + service,
    data: params,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.data.status !== 200) {
        alert(response.data.error);
      } else return next(response);
    })
    .catch((error) => {
      alert("Ha ocurrido un error en el servidor: " + error);
    });
};

const loginService = (service, method, params, next) => {
  var serverUsername = " guest";
  var serverPassword = "abcde";
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  axios({
    method: method,
    url: serverUrl + service,
    responseType: "json",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    data: params,
  })
    .then((response) => {
      if (response.data.status !== 200) {
        alert(response.data.error);
      } else return next(response);
    })
    .catch((error) => {
      alert("Ha ocurrido un error en el servidor: " + error);
    });
};

export { webService, loginService, adminService, webServiceAsync };
