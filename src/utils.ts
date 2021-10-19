import { KeyboardEventHandler } from "react";

export const enterHandler =
  (
    save: () => void
  ): KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
  (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      if (e.shiftKey) {
        const value = e.currentTarget.value,
          selEnd = e.currentTarget.selectionEnd ?? 0,
          selStart = e.currentTarget.selectionStart ?? 0;

        e.currentTarget.value =
          value.slice(0, selStart) + "\n" + value.slice(selEnd);
      } else save();
    }
  };
