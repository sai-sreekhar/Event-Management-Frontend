import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux";
import { apiStatus, authOperation, authStatus } from "../redux/auth/authTypes";
import { Navigate } from "react-router";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";

const defaultTheme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(""); // Clear the email error if it's valid
      dispatch(authActions.login(email, password));
    }
  };

  useEffect(() => {
    if (
      auth.apiStatus === apiStatus.FAILURE &&
      auth.authOperation === authOperation.LOGIN &&
      auth.authStatus === authStatus.NOT_LOGGED_IN
    ) {
      setOpen(true);
    }
    return () => {};
  }, [auth.apiStatus, auth.authOperation, auth.authStatus]);

  if (auth.accessToken) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {auth.errorReason}
        </Alert>
      </Snackbar>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={!!emailError}
                helperText={emailError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={
                  auth.apiStatus === apiStatus.IN_PROGRESS &&
                  auth.authOperation === authOperation.LOGIN &&
                  auth.authStatus === authStatus.NOT_LOGGED_IN
                }
              >
                Login
              </LoadingButton>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
