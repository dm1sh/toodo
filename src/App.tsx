import React from "react";
import { Provider } from "react-redux";

import { Layout } from "./components/Layout";
import { TodoList } from "./components/TodoList";
import { AppBar } from "./components/AppBar";
import { AddTask } from "./components/AddTask";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Layout appBar={<AppBar />} title="My tasks" content={<TodoList />} />
      <AddTask />
    </Provider>
  );
};
