import React from "react";

import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks";
import { EmptyList } from "./EmptyList";

export const TodoList: React.FC = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  return (
    <Paper variant="outlined">
      {tasks.length ? (
        <List>
          {tasks.map((task, index) => (
            <TodoItem key={task.id} task={task} index={index} />
          ))}
        </List>
      ) : (
        <EmptyList />
      )}
    </Paper>
  );
};
