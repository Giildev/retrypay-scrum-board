// Importing necessary functions and variables from different files
import { dragAndDrop } from "../utils/dragAndDrop";
import {
  descriptionInput,
  prioritySelect,
  titleInput,
} from "../utils/selectors";
import { setStore } from "../utils/store";
import { createCard } from "./createCard";

// Function to add a new card to the task list
export function addNewCard() {
  // Creating an object to store the new task's data
  const newTask = {
    title: (titleInput as HTMLInputElement)?.value,
    priority: (prioritySelect as HTMLInputElement)?.value,
    description: (descriptionInput as HTMLInputElement)?.value,
  };
  // Storing the new task object in the localStorage
  setStore(newTask);
  // Calling the function to create a new card for the task
  createCard(newTask);
  // Enabling drag and drop functionality for the new card
  dragAndDrop(".draggableCard", ".draggableCardContainer");
}
