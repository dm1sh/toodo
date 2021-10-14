import React, { useState } from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InputBase from "@mui/material/InputBase";
import TrapFocus from "@mui/material/Unstable_TrapFocus";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const AddTask: React.FC = () => {
  const [open, setOpen] = useState(true);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
        onOpen={onOpen}
        onClose={onClose}
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
