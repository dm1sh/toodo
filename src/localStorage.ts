import { TaskItemT } from "./types";

const LOCAL_STORAGE_KEY = "reduxStorage";

export const loadStorage = (): TaskItemT[] | undefined => {
  try {
    const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

export const saveStorage = (storage: TaskItemT[]) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
