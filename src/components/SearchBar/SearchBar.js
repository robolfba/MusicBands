import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { searchBand } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { Search } from "./Search";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { StyledInputBase } from "./StyledInputBase";

export default function SearchBar() {
  // Local state
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => setInput(event.target.value);

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      dispatch(searchBand(input));
      setInput("");
    }
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={input}
          onChange={handleChange}
          onKeyPress={handleSubmit}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}
