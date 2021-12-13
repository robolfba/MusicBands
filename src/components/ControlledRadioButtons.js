import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortData } from "../redux/actions/index";

export default function ControlledRadioButtons({
  sortBy,
  labelAsc,
  labelDesc,
}) {
  // Local state
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(sortData(value, sortBy));
  }, [value, sortBy, dispatch]);

  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel
            value="asc"
            control={<Radio color="primary" />}
            label={labelAsc}
          />
          <FormControlLabel
            value="desc"
            control={<Radio color="primary" />}
            label={labelDesc}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
