import { Button, Grid } from "@material-ui/core";
import React from "react";
import Cards from "../components/Cards";
import ControlledRadioButtons from "../components/ControlledRadioButtons";
import ControlledSelect from "../components/ControlledSelect";
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { getBandsByGenre } from "../redux/actions/index";

export default function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getBandsByGenre(""));
  };

  return (
    <>
      <NavBar
        userData={
          localStorage.getItem("username")
            ? localStorage.getItem("username")
            : false
        }
      />
      <Grid container>
        <Grid
          item
          style={{
            marginLeft: "52px",
            width: "90vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ControlledSelect />
          <Button onClick={handleClick} variant="contained">
            Refresh bands
          </Button>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <ControlledRadioButtons
              labelAsc="A to Z"
              labelDesc="Z to A"
              sortBy="name"
            />
            <ControlledRadioButtons
              labelAsc="'60 to '90"
              labelDesc="'90 to '60"
              sortBy="year"
            />
          </Grid>
        </Grid>
      </Grid>
      <Cards />
    </>
  );
}
