import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  user: {
    marginLeft: 70,
  },
}));

export default function NavBar({ userData }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            MusicBands
          </Typography>

          {userData && (
            <>
              <SearchBar />
              <Typography className={classes.user}>{userData}</Typography>
              <IconButton onClick={logOut} color="inherit" aria-label="logout">
                <LogoutRoundedIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
}
