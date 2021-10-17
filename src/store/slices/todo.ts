import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskItemT } from "../../types";

const initialState: { tasks: TaskItemT[] } = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<TaskItemT>) => {
      state.tasks.push(payload);
    },
    markDone: (
      state,
      { payload }: PayloadAction<{ index: number; value: boolean }>
    ) => {
      state.tasks[payload.index].done = payload.value;
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.tasks.splice(payload);
    },
  },
});

export const { add, markDone, remove } = todoSlice.actions;

export default todoSlice.reducer;
