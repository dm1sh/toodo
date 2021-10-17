import React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InputBase from "@mui/material/InputBase";
import TrapFocus from "@mui/material/Unstable_TrapFocus";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../hooks";
import {
  open as openAction,
  close as closeAction,
} from "../store/slices/uiState";

export const AddTask: React.FC = () => {
  const open = useAppSelector((state) => state.uiState.addBarOpen);
  const dispatch = useAppDispatch();

  return (
    <TrapFocus open={open}>
      <SwipeableDrawer
        sx={{
          "& .MuiDrawer-paperAnchorBottom": {
            overflowY: "visible",
            padding: (theme) => theme.spacing(0, 2, 2, 2),
          },
          position: "relative",
        }}
        anchor="bottom"
        open={open}
        onOpen={() => dispatch(openAction())}
        onClose={() => dispatch(closeAction())}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: (theme) => theme.spacing(2),
            borderRadius: (theme) => theme.spacing(2, 2, 0, 0),
            top: (theme) => "-" + theme.spacing(2),
            left: 0,
            background: (theme) => theme.palette.background.paper,
          }}
        />
        <InputBase
          fullWidth
          placeholder="New task"
          autoFocus={open}
          multiline
        />
        <Box sx={{ paddingTop: (theme) => theme.spacing(1) }}>
          <Button variant="text" sx={{ float: "right" }}>
            Save
          </Button>
        </Box>
      </SwipeableDrawer>
    </TrapFocus>
  );
};
