import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Layout } from "./Layout";
import { TodoList } from "./TodoList";
import { AppBar } from "./AppBar";
import { TaskItemT } from "./types";

const tasks: TaskItemT[] = [
  { text: "test", done: false, id: 0 },
  { text: "Long, a bit tooooooo0000000000oooooo long test", done: true, id: 1 },
];

export const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({ palette: { mode: prefersDarkMode ? "dark" : "light" } }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        appBar={<AppBar />}
        title="My tasks"
        content={<TodoList tasks={tasks} />}
      />
    </ThemeProvider>
  );
};
