import { addNewCard } from "../cards/addNewCard";
import { addNewColumn } from "../columns/addNewColumn";
import { closeModal, openModal } from "./modal";
import { button, closeButton, submitButton } from "./selectors";

// Function to create a new column when the "Create New Column" button is clicked
export const createNewColumnLoop = () => {
  // Selecting the "Create New Column" button
  const createNewColumnButton = document.querySelector(
    ".board__createNewColumn"
  );

  // Adding a click event listener to the button
  createNewColumnButton?.addEventListener("click", () => {
    // Selecting the "Add" icon within the button
    const span = createNewColumnButton.querySelector(
      ".material-symbols-outlined"
    );
    // Creating an input field for the column title
    const input = document.createElement("input");
    input.classList.add("modal__title-input");
    input.setAttribute("type", "text");
    input.placeholder = "i.e: Under Review";
    input.setAttribute("autofocus", "true");
    // Replacing the "Add" icon with the input field
    span?.parentNode?.replaceChild(input, span);
    // Adding an event listener for when the "Enter" key is pressed
    input.addEventListener("keydown", function (event) {
      // Checking if the key pressed is the "Enter" key (code 13)
      if (event.key === "Enter") {
        // Calling the function to add a new column with the input value as the title
        addNewColumn(input.value, true);
        // Restarting the loop to add a new column again
        createNewColumnLoop();
      }
    });
  });
};

export const openModalListener = () => {
  button?.addEventListener("click", () => {
    openModal();
  });
};

export const closeModalListener = () => {
  closeButton?.addEventListener("click", () => {
    closeModal();
  });
};
export const submitModalListener = () => {
  submitButton?.addEventListener("click", (event) => {
    event.preventDefault();
    addNewCard();
    closeModal();
  });
};
