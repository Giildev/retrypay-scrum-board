import { ITask } from "../types";
import { createElement } from "../utils/createElement";
import { deleteCard } from "../utils/delete";

// Function to randomly select a color for the new card
const randomCardColor = () => {
  // Array of colors to choose from
  const colors = [
    "lightPink",
    "deepChampagne",
    "lemonYellowCrayola",
    "teaGreen",
    "electricBlue",
    "babyBlueEyes",
    "maximumBluePurple",
    "mauve",
  ];
  // Returning a random color from the array
  return colors[Math.floor(Math.random() * colors.length)];
};

// Function to create a new card for a task
export const createCard = (task: ITask) => {
  // Creating the new card element
  const newCard = createElement({
    type: "div",
    className: ["board__card", "draggableCard"],
    style: { "--cardBgCol": `var(--${randomCardColor()})` }, // Assigning a random background color to the card
    attr: { draggable: "true" },
    id: Math.floor(Math.random() * 100000), // Assigning a unique id to the card
  });

  const newCardContent = createElement({
    type: "div",
    className: ["board__card--content"],
    appendTo: newCard,
  });

  const newCardAction = createElement({
    type: "div",
    className: ["board__card--action"],
    appendTo: newCard,
  });

  createElement({
    type: "div",
    className: ["board__card--title"],
    content: task.title,
    appendTo: newCardContent,
  });

  createElement({
    type: "div",
    className: ["board__card--priority"],
    content: task.priority,
    appendTo: newCardContent,
    style: {
      "--backgroundColor": `var(--${task.priority})`,
    },
  });

  createElement({
    type: "div",
    className: ["board__card--description"],
    content: task.description,
    appendTo: newCardContent,
  });

  createElement({
    type: "button",
    className: ["board__card--delete", "material-symbols-outlined"],
    content: "Delete",
    appendTo: newCardAction,
    onclick: (element) => deleteCard(element),
  });

  const addNewCardContainer = document.querySelector(
    ".board__column--background "
  );
  addNewCardContainer?.appendChild(newCard);
};
