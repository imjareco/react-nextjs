import { useState, useCallback } from "react";

type IToggleValues = [boolean, (status?: boolean) => void];

export default function useToggle({ initialValue = false } = {}): IToggleValues {
  const [toggled, setToggled] = useState(initialValue);

  const handleToggle = useCallback((forceToggle?: boolean) => {
    setToggled((currentValue) => forceToggle ?? !currentValue);
  }, []);

  return [toggled, handleToggle];
}
