import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Grid, Tab, Tabs } from "@mui/material";
import '../../assets/css/tab.Component.css'
const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        textAlign: "center",
        backgroundColor: "#f0f0f0",
        padding: "5px 5px 20px 20px",
        // marginTop: 1,
      }}
    >
      <Grid item xs={12}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="All" className="tabMenu"/>
          <Tab label="Creative" className="tabMenu"/>
          <Tab label="Editorial" className="tabMenu"/>
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default TabComponent;
