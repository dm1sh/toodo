import React from "react";

import { Layout } from "./components/Layout";
import { TodoList } from "./components/TodoList";
import { AppBar } from "./components/AppBar";
import { TaskItemT } from "./types";
import { AddTask } from "./components/AddTask";

const tasks: TaskItemT[] = [
  { text: "test", done: false, id: 0 },
  { text: "Long, a bit tooooooo0000000000oooooo long test", done: true, id: 1 },
];

export const App = () => {
  return (
    <>
      <Layout
        appBar={<AppBar />}
        title="My tasks"
        content={<TodoList tasks={tasks} />}
      />
      <AddTask />
    </>
  );
};
