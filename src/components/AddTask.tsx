import React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InputBase from "@mui/material/InputBase";
import TrapFocus from "@mui/material/Unstable_TrapFocus";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector, useInputValue } from "../hooks";
import {
  open as openAction,
  close as closeAction,
} from "../store/slices/uiState";
import { add } from "../store/slices/todo";

export const AddTask: React.FC = () => {
  const open = useAppSelector((state) => state.uiState.addBarOpen);
  const dispatch = useAppDispatch();

  const { value, onChange, submit } = useInputValue("", (submitValue) =>
    dispatch(add(submitValue))
  );

  const save = () => {
    submit();
    onChange("");
    dispatch(closeAction());
  };

  return (
    <TrapFocus open={open}>
      <SwipeableDrawer
        sx={{
          "& .MuiDrawer-paperAnchorBottom": {
            overflowY: "visible",
            padding: (theme) => theme.spacing(0, 2, 2, 2),
            maxWidth: "100vh",
            margin: "0 auto",
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
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
          }}
        />
        <InputBase
          fullWidth
          placeholder="New task"
          autoFocus={open}
          value={value}
          onFocus={(e) => {
            e.currentTarget.setSelectionRange(value.length, value.length);
          }}
          onChange={(e) => onChange(e.currentTarget.value)}
          multiline
        />
        <Box sx={{ paddingTop: (theme) => theme.spacing(1) }}>
          <Button onClick={save} variant="text" sx={{ float: "right" }}>
            Save
          </Button>
        </Box>
      </SwipeableDrawer>
    </TrapFocus>
  );
};
