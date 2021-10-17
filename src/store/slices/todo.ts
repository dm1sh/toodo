import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskItemT } from "../../types";

const initialState: { tasks: TaskItemT[] } = {
  tasks: [
    { done: true, id: 1, text: "hello" },
    { done: false, id: 2, text: "goodbye" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<TaskItemT>) => {
      state.tasks.push(payload);
    },
    updateText: (
      state,
      { payload }: PayloadAction<{ index: number; text: string }>
    ) => {
      state.tasks[payload.index].text = payload.text;
    },
    markDone: (
      state,
      { payload }: PayloadAction<{ index: number; value: boolean }>
    ) => {
      state.tasks[payload.index].done = payload.value;
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.tasks.splice(payload, 1);
    },
  },
});

export const { add, updateText, markDone, remove } = todoSlice.actions;

export default todoSlice.reducer;
