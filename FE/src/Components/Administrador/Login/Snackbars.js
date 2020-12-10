import React, { Fragment } from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Error as ErrorIcon, Warning as WarningIcon, CheckCircle as CheckCircleIcon } from "@material-ui/icons";

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
    backgroundColor: theme.palette.error.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alingItems: "center",
  },
}));

const EnvoltorioDeSnack = (props) => {
  const classes = useStyle1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = iconoVariante[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
};

const useStyle2 = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Snackbars = (props) => {
  const classes = useStyle2();

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={props.snackbar.open}
        onClose={props.handleClose}
      >
        <EnvoltorioDeSnack
          variant={props.snackbar.variant}
          message={props.snackbar.message}
        />
      </Snackbar>
    </Fragment>
  );
}

export default Snackbars;
