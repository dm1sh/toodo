import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import React, { useState } from "react";
import { TaskItemT } from "./types";

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
        ></TextField>
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
