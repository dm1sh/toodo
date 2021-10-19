import React, { ReactNode, useMemo } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export type LayoutProps = {
  appBar: ReactNode;
  content: ReactNode;
  title: string;
};

export const Layout: React.FC<LayoutProps> = ({ appBar, content, title }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({ palette: { mode: prefersDarkMode ? "dark" : "light" } }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: (theme) => theme.spacing(2, 2, 10, 2) }}>
        <Typography variant="h4" sx={{ paddingLeft: 2, marginBottom: 2 }}>
          <Checkbox aria-hidden={true} sx={{ visibility: "hidden" }} />
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
    </ThemeProvider>
  );
};
