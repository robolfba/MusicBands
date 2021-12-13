import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { getBandsByGenre } from "../redux/actions/index";
import { URL_GENRE } from "../constantUrl/index";

export default function ControlledSelect() {
  // Local state
  const [item, setItem] = useState("");
  const [open, setOpen] = useState(false);

  // Custom hook
  let { data } = useAxios(URL_GENRE);

  const dispatch = useDispatch();

  const handleChange = (event) => setItem(event.target.value);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    dispatch(getBandsByGenre(item));
  }, [item, dispatch]);

  return (
    <>
      <FormControl style={{ margin: 15, width: 180 }}>
        <InputLabel style={{ paddingLeft: 4 }}>Genre</InputLabel>
        <Select
          variant="outlined"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={item}
          label={"Genre"}
          onChange={handleChange}
        >
          <MenuItem value="" selected>
            <em>All genres</em>
          </MenuItem>
          {data &&
            data.map((genre, index) => (
              <MenuItem key={index} value={genre.code}>
                {genre.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
