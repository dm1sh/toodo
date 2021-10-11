import { List, Paper } from "@mui/material";
import React from "react";
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
