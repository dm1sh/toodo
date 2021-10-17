import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

import { TaskItemT } from "../types";

export type TodoItemProps = { task: TaskItemT };

export const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const { done, text } = task;

  const [editing, setEditing] = useState(false);

  return (
    <ListItem>
      <Checkbox checked={done} />
      {editing ? (
        <TextField
          fullWidth
          variant="standard"
          value={text}
          autoFocus={true}
          onBlur={() => setEditing(false)}
          multiline
        />
      ) : (
        <ListItemText onClick={() => setEditing(true)} primary={text} />
      )}
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
