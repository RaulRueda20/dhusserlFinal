import React, { useContext, useEffect } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { amber, green, red } from "@material-ui/core/colors";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";

import { sesionStore } from "../../../stores/sesionStore";

const iconoVariante = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  warning: WarningIcon,
};

const useStyle1 = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[900],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: "5px !important",
  },
  message: {
    display: "flex",
    alingItems: "center",
  },
}));

const EnvoltorioDeSnack = (props) => {
  const classes = useStyle1();
  const global = useContext(sesionStore);
  const { state } = global;
  const { snackbar } = state;

  const { className, message, onClose, variant, ...other } = props;

  const Icon = iconoVariante[variant];

  useEffect(() => {
    console.log("message en SnackbarContent", message);
  });

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {snackbar.message}
        </span>
      }
      {...other}
    />
  );
};

export default function Snackbars(props) {
  const global = useContext(sesionStore);
  const { state } = global;
  const { snackbar } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbar.open}
        onClose={props.handleClose}
      >
        <EnvoltorioDeSnack
          variant={snackbar.variant}
          message={snackbar.message}
        />
      </Snackbar>
    </div>
  );
}
