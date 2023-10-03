import React, { useState, useEffect, useContext, useRef } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import UserContext from "../UserContext";
import axios from "axios";
import { env } from "../config";
const SearchBar = () => {
  const inputRef = useRef(null);

  const { categoryData, setCategoryData } = useContext(UserContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData(search);
  }, [search]);

  let getData = async (search) => {
    try {
      let response = await axios.get(`${env.api}/Equipments`);
      let category = response.data;
      let final = [];
      let upperCase = search.toUpperCase();
      category.map((el) => {
        if (el.Name == upperCase) {
          final.push(el);
        }
      });
      setCategoryData(final);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Equipment"
      />
      <IconButton
        onClick={() => {
          let datae = inputRef.current.value;
          setSearch(datae);
        }}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;