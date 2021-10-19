import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";

import { TransitionGroup } from "react-transition-group";

import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks";
import { EmptyList } from "./EmptyList";
import { isTaskItem, TaskItemT } from "../types";

export const TodoList: React.FC = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  const [list, setList] = useState<TaskItemT[] | {}[]>([]);

  useEffect(() => {
    if (tasks.length) setList(tasks);
    else setList([{}]);
  }, [tasks]);

  return (
    <Paper variant="outlined">
      <List>
        <TransitionGroup>
          {list.map((task, index) =>
            isTaskItem(task) ? (
              <Collapse key={task.id}>
                <TodoItem task={task} index={index} />
              </Collapse>
            ) : (
              <Collapse key={"empty"}>
                <EmptyList />
              </Collapse>
            )
          )}
        </TransitionGroup>
      </List>
    </Paper>
  );
};
