import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/Inbox";

export const EmptyList: React.FC = () => (
  <Box
    sx={{
      paddingBottom: (theme) => theme.spacing(2),
      textAlign: "center",
    }}
  >
    <InboxIcon sx={{ fontSize: "10rem" }} color={"primary"} />
    <Typography variant={"h6"}>Empty in tasks</Typography>
    <Typography>Write first task to save it here</Typography>
    <Typography>To insert new line in task, press Shift+Enter</Typography>
  </Box>
);
