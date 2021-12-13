import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, Modal } from "@mui/material";
import { getAlbums } from "../redux/actions/index";
import { deepPurple } from "@material-ui/core/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalDetail({ bandId }) {
  // Gobal State
  let albums = useSelector((state) => state.albums);

  // Local State
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (open) {
      dispatch(getAlbums(bandId));
    }
  }, [open, bandId, dispatch]);

  return (
    <>
      <Button
        onClick={handleOpen}
        size="small"
        variant="contained"
        sx={{ backgroundColor: deepPurple[900] }}
      >
        Learn More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" id="modal-modal-title" variant="h5">
            Albums
          </Typography>
          {albums.length ? (
            albums.map((elem, index) => (
              <Typography
                key={index}
                align="center"
                component="div"
                sx={{ mt: 2 }}
              >
                {`${elem.name} (${elem.year})`}
              </Typography>
            ))
          ) : (
            <Typography align="center" component="div" sx={{ mt: 2 }}>
              There are no albums loaded
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}
