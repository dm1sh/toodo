import React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Add from "@mui/icons-material/Add";

import { useAppDispatch } from "../hooks";
import { open } from "../store/slices/uiState";

export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
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
        onClick={() => dispatch(open())}
      >
        <Add sx={{ marginRight: 1 }} />
        Add a new task
      </Fab>
    </Box>
  );
};
