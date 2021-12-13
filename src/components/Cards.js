import { Typography, Grid, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import BasicCard from "./BasicCard";
import { useSelector, useDispatch } from "react-redux";
import { getBandsByGenre } from "../redux/actions/index";

export default function Cards() {
  // Global state
  const data = useSelector((state) => state.bands);

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(getBandsByGenre(""));
  };

  useEffect(() => {});

  return (
    <>
      <Grid
        style={{
          width: "98vw",
          heigth: "80vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!data.length ? (
          <>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* {setTimeout(() => {
                <> */}
              <Typography
                variant="h4"
                style={{ marginTop: 100, marginBottom: 30 }}
              >
                There is no band with that name
              </Typography>
              <Button
                onClick={handleReset}
                variant="contained"
                color="primary"
                style={{ width: "500px" }}
              >
                Reload bands
              </Button>
              {/* </>;
              }, 500)}
              <Typography
                variant="h4"
                style={{ marginTop: 100, marginBottom: 30 }}
              >
                Loading...
              </Typography> */}
            </Grid>
          </>
        ) : (
          data.map((band) => (
            <BasicCard
              name={band.name}
              year={band.year}
              genre={band.genreCode}
              country={band.country}
              bandId={band.id}
              members={band.members}
              key={band.id}
            />
          ))
        )}
      </Grid>
    </>
  );
}
