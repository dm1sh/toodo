import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "./store";

export type UseInputValueReturnT = {
  onChange: (value: string) => void;
  submit: () => void;
  value: string;
};

export const useInputValue = (
  initialValue: string = "",
  onSubmit: (value: string) => void
): UseInputValueReturnT => {
  const [value, setValue] = useState(initialValue);

  return {
    onChange: (value) => setValue(value),
    submit: () => onSubmit(value),
    value,
  };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
