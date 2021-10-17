import React, { useEffect } from "react";

import { Layout } from "./components/Layout";
import { TodoList } from "./components/TodoList";
import { AppBar } from "./components/AppBar";
import { AddTask } from "./components/AddTask";

import { loadStorage } from "./localStorage";
import { useAppDispatch } from "./hooks";
import { hydrate } from "./store/slices/todo";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialStorage = loadStorage();
    if (initialStorage) dispatch(hydrate(initialStorage));
  }, []);

  return (
    <Layout
      appBar={<AppBar />}
      title="My tasks"
      content={
        <>
          <TodoList />
          <AddTask />
        </>
      }
    />
  );
};
