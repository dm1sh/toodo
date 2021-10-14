import React from "react";

import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

import { TodoItem } from "./TodoItem";
import { TaskItemT } from "./types";

export type TodoListProps = {
  tasks: TaskItemT[];
};

export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <Paper variant="outlined">
      <List>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </List>
    </Paper>
  );
};
