"use client";
import * as React from "react";
import { Box, TextField } from "@mui/material";
import { CustomTable } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";

const Screen1 = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your backend URL (adjust if backend is running on a different server)
        const response = await axios.get(
          "http://localhost:5000/api/table-data"
        );

        setTableData(response.data); // Set the data to state
        setLoading(false); // Data is loaded
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts


  return (
    <Box
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "50px" }}
      >
        <div style={{ marginRight: "20px", fontSize: "24px" }}>Search :</div>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          style={{ width: "40%" }}
        />
      </div>
      <CustomTable tableData={tableData}/>
    </Box>
  );
};

export default Screen1;
