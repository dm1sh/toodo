import React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Add from "@mui/icons-material/Add";

export const AppBar: React.FC = () => (
  <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
    <Fab
      variant="extended"
      color="primary"
      aria-label="add"
      sx={{
        position: "relative",
        zIndex: 1,
        top: -30,
      }}
    >
      <Add sx={{ marginRight: 1 }} />
      Add a new task
    </Fab>
  </Box>
);
