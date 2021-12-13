import React from "react";
import Card from "@mui/material/Card";
import { CardActions, CardContent, Typography, Grid } from "@material-ui/core";
import ModalDetail from "./ModalDetail";
import { deepPurple } from "@material-ui/core/colors";
import { capitalize, convert } from "../controllers/BasicCard/index";

export default function BasicCard({
  name,
  genre,
  bandId,
  year,
  country,
  members,
}) {
  return (
    <>
      <Grid
        style={{
          margin: "15px",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            borderTop: "solid",
            borderColor: deepPurple[900],
            width: 275,
            height: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography variant="h5" component="div">{`${name}`}</Typography>
            <br />
            <Typography
              variant="body1"
              component="div"
            >{`${country} (${year})`}</Typography>
            <Typography variant="body1" component="div">{`${capitalize(
              genre
            )}`}</Typography>
            <Typography align="center" variant="body2" component="div">
              {convert(members)}
            </Typography>
          </CardContent>
          <CardActions>
            <ModalDetail bandId={bandId} />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
