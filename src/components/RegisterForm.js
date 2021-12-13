import React, { useEffect } from "react";
import { Grid, Typography, Box, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions/index";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterForm() {
  // Global state
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };

  useEffect(() => {
    return () => {
      navigate("/");
    };
  }, [users, navigate]);

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
          <Typography variant="h4">Enter your details</Typography>
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
            to register
          </Button>
          <Link to="/login">
            <Typography align="right" variant="body2">
              Sign in
            </Typography>
          </Link>
        </Grid>
      </Box>
    </>
  );
}
