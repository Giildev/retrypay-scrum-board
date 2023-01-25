import { getStore, setColumnStore } from "../utils/store";
import { createColumn } from "./createColumn";

export function addNewColumn(value: string, moveButton?: boolean) {
  const newColumn = {
    title: value,
  };
  setColumnStore(newColumn);
  createColumn(newColumn, "", moveButton);
}
