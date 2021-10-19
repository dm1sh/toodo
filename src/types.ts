export type TaskItemT = {
  id: number;
  text: string;
  done: boolean;
};

export const isTaskItem = (el: TaskItemT | {}): el is TaskItemT => {
  return "id" in el && "text" in el && "done" in el;
};
