import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";

const SearchSection = ({ query, setQuery, handleSearch, loading }) => {
  return (
    <Toolbar sx={{ borderBottom: "1px solid lightgray" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Select value="all" variant="outlined" sx={{ mr: 1 }}>
          <MenuItem value="all">
            <ImageIcon sx={{ verticalAlign: "middle" }} /> All Images
          </MenuItem>
        </Select>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton color="inherit" onClick={handleSearch} disabled={loading}>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            sx={{ flexGrow: 1 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div style={{ flexGrow: 1 }} />
      <Button color="inherit" variant="outlined" startIcon={<CameraAltIcon />}>
        Search by Image
      </Button>
    </Toolbar>
  );
};

export default SearchSection;
