import axios from "axios";
import * as localStore from "./localStore";
const serverUrl = "http://3.22.12.85:1938/api/v1.0";
//const serverUrl = "https://" + window.location.host + "/api/v1.0"

const webService = (service, method, params, sesion, next) => {
  var serverUsername = localStore.getObjects("sesion").user
  var serverPassword = localStore.getObjects("sesion").password
  // var serverUsername = sesion?.usuario ?? localStore.getObjects("sesion").user;
  // var serverPassword = sesion?.password ?? localStore.getObjects("sesion").password;
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  axios({
    method: method,
    // contentType : 'application/json',
    url: serverUrl + service,
    data: params,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return next(response);
    })
    .catch((error) => {
      console.log("ERROR EN ", service, error)
      alert("Ha habido un error" + error.status + " : " + error.statusText);
    });
};

const adminService = (service, method, params, next) => {
  var serverUsername = localStore.getObjects("admin_sesion").email;
  var serverPassword = localStore.getObjects("admin_sesion").user_password;
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  axios({
    method: method,
    // contentType : 'application/json',
    url: serverUrl + service,
    data: params,
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      next(response);
    })
    .catch((error) => {
      alert("Ha habido un error" + error.status + " : " + error.statusText);
    });
};

const loginService = (service, method, params, next) => {
  var serverUsername = " guest";
  var serverPassword = "abcde";
  var auth = "Basic " + btoa(serverUsername + ":" + serverPassword);
  axios({
    // contentType : 'application/json',
    method: method,
    url: serverUrl + service,
    responseType: "json",
    // jsonp : false,
    // cache: 'true',
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    data: params,
  })
    .then((response) => {
      next(response);
    })
    .catch((error) => {
      alert("Ha habido un error" + error.status + " : " + error.statusText);
    });
};

export { webService, loginService, adminService };
