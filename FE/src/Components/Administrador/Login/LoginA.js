//React
import React, { useEffect } from "react";

//Components
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";

//Other req
import * as localStore from "../../../js/localStore";

function LoginA(props) {
  const { history, match } = props;
  const { url } = match;

  useEffect(() => {
    if (localStore.getObjects("admin_sesion")) {
      if (
        localStore.getObjects("admin_sesion").email &&
        localStore.getObjects("admin_sesion").user_password
      ) {
        history.push(`${url}/husserl`);
      }
    }
  }, [true]);

  return (
    <>
      <Header />
      <LoginForm {...props} />
      <br />
      <Footer />
    </>
  );
}

export default LoginA;
