import { IColumn, ITask } from "../types";

const defualtColumns = [
  { title: "To-Do" },
  { title: "In Progress" },
  { title: "Done" },
];

export const setStore = (newTask: ITask) => {
  // Get the existing tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // Add the new task to the existing tasks
  tasks.push(newTask);

  // Store the updated tasks in local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getStore = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

export const setColumnStore = (newColumns: IColumn) => {
  // Get the existing column from local storage
  let columns = JSON.parse(
    localStorage.getItem("columns") || JSON.stringify(defualtColumns)
  );

  // Add the new task to the existing column
  columns.push(newColumns);

  // Store the updated column in local storage
  localStorage.setItem("columns", JSON.stringify(columns));
};

export const getColumnStore = () => {
  const columns = localStorage.getItem("columns");
  columns === null &&
    localStorage.setItem("columns", JSON.stringify(defualtColumns));
  return JSON.parse(localStorage.getItem("columns") || "[]");
};
