import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { amber, green, red } from "@material-ui/core/colors";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

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
    backgroundColor: red[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 5,
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

const Snackbars = (props) => {
  const { snackbar, handleClose } = props;
  const { open, variant, message } = snackbar;

  React.useEffect(() => {
    console.log(props);
  }, [true]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      onClose={handleClose}
    >
      <EnvoltorioDeSnack variant={variant} message={message} />
    </Snackbar>
  );
};

export default Snackbars;
