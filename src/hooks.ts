import { ChangeEventHandler, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "./store";

export type UseInputValueReturnT = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  submit: () => void;
  value: string;
};

export const useInputValue = (
  initialValue: string = "",
  onSubmit: (value: string) => void
): UseInputValueReturnT => {
  const [value, setValue] = useState(initialValue);

  return {
    onChange: (e) => setValue(e.currentTarget.value),
    submit: () => onSubmit(value),
    value,
  };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
