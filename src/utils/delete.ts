import { ITask } from "../types";

export const deleteCard = (element: any) => {
  // Get the card element
  console.log(element);
  const card = element.target.closest(".board__card");

  // Get the tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  if (card) {
    // Find the index of the task that corresponds to the clicked card
    const index = tasks.findIndex(
      (task: ITask) =>
        task.title === card.querySelector(".board__card--title").textContent
    );

    // Remove the task from the tasks array
    tasks.splice(index, 1);

    // Update the tasks in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Remove the card from the HTML
    card.remove();
  }
};

export const deleteColumn = (element: any) => {
  // Get the column element
  const column = element.target.closest(".board__column");

  // Get the column from local storage
  let columns = JSON.parse(localStorage.getItem("columns") || "[]");

  if (column) {
    // Find the index of the task that corresponds to the clicked column
    const index = columns.findIndex((columnToDelete: any) => {
      columnToDelete.title ===
        column.querySelector(".board__title").textContent;
    });

    // Remove the task from the column array
    columns.splice(index, 1);

    columns.length > 0
      ? // Update the column in local storage
        localStorage.setItem("columns", JSON.stringify(columns))
      : localStorage.removeItem("columns");

    // Remove the column from the HTML
    column.remove();
  }
};
