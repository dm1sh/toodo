import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

import { TaskItemT } from "../types";
import { useAppDispatch } from "../hooks";
import { markDone, remove } from "../store/slices/todo";

export type TodoItemProps = { task: TaskItemT; index: number };

export const TodoItem: React.FC<TodoItemProps> = ({ task, index }) => {
  const { done, text } = task;

  const dispatch = useAppDispatch();

  const [editing, setEditing] = useState(false);

  return (
    <ListItem>
      <Checkbox
        checked={done}
        onClick={() => dispatch(markDone({ index, value: !done }))}
      />
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
        <ListItemText
          sx={{
            textDecoration: done ? "line-through" : undefined,
          }}
          onClick={() => setEditing(true)}
          primary={text}
        />
      )}
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete Todo"
          onClick={() => dispatch(remove(index))}
        >
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
