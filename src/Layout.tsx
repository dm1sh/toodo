import { AppBar, Box, Toolbar, Typography, Checkbox } from "@mui/material";
import React, { ReactNode } from "react";

export type LayoutProps = {
  appBar: ReactNode;
  content: ReactNode;
  title: string;
};

export const Layout: React.FC<LayoutProps> = ({ appBar, content, title }) => (
  <>
    <Box sx={{ padding: (theme) => theme.spacing(2, 2, 10, 2) }}>
      <Typography variant="h4" sx={{ paddingLeft: 2, marginBottom: 2 }}>
        <Checkbox sx={{ visibility: "hidden" }} />
        {title}
      </Typography>
      {content}
    </Box>
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar>{appBar}</Toolbar>
    </AppBar>
  </>
);
