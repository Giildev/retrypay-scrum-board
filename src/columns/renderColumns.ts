import { IColumn } from "../types";
import { getColumnStore } from "../utils/store";
import { createColumn } from "./createColumn";

export function renderColumns() {
  // Get the column from local storage
  const columns = getColumnStore();

  // Loop through the column and create a card for each one
  columns.forEach((column: IColumn, index: number) => {
    createColumn(column, index === columns.length - 1 ? "last" : "");
  });
}
