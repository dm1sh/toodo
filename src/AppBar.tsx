import { Fab, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";
import React from "react";

/* TODO: create component for task adding */

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
