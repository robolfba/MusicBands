import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { indigo } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  // Global state
  let allUsers = useSelector((state) => state.users);

  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let find = allUsers.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (find) {
      localStorage.setItem("username", data.username);
      navigate("/home");
    } else {
      alert("The user is invalid");
    }
  };
  return (
    <>
      <Box
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AccountCircleIcon sx={{ color: indigo[900], fontSize: 150 }} />
          <Grid item style={{ margin: "10px" }}>
            <TextField
              variant="outlined"
              placeholder="Username"
              type="text"
              error={errors.username ? true : false}
              {...register("username", { required: true })}
              style={{ width: "20vw" }}
            ></TextField>
          </Grid>
          <Grid item style={{ margin: "10px" }}>
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              error={errors.password ? true : false}
              {...register("password", { required: true })}
              style={{ width: "20vw" }}
            ></TextField>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            style={{ margin: "10px", width: "20vw", height: "50px" }}
          >
            Confirm
          </Button>
          <Link to="/register">
            <Typography align="right" variant="body2">
              I do not have an account
            </Typography>
          </Link>
        </Grid>
      </Box>
    </>
  );
}
