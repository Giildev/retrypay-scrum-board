import { ITask } from "../types";
import { getStore } from "../utils/store";
import { createCard } from "./createCard";

export function renderCards() {
  // Get the tasks from local storage
  const tasks = getStore();

  // Loop through the tasks and create a card for each one
  tasks.forEach((task: ITask) => {
    createCard(task);
  });
}
