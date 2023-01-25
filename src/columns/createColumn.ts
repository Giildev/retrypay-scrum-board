import { IColumn } from "../types";
import { createElement } from "../utils/createElement";
import { deleteColumn } from "../utils/delete";

const randomColumnColor = () => {
  const colors = [
    "flickrPink",
    "byzantine",
    "purple",
    "purpleTwo",
    "trypanBlue",
    "trypanBlueTwo",
    "persianBlue",
    "ultramarineBlue",
    "dodgerBlue",
    "vividSkyBlue",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const createNewButtonToCreateColumn = (container: Element) => {
  const extraColumn = createElement({
    type: "div",
    className: ["board__column"],
  });

  const newColumnToCreate = createElement({
    type: "div",
    className: ["board__createNewColumn"],
    appendTo: extraColumn,
  });

  createElement({
    type: "span",
    className: ["material-symbols-outlined"],
    content: "add",
    appendTo: newColumnToCreate,
  });

  container?.appendChild(extraColumn);
};

export const createColumn = (
  column: IColumn,
  position?: string,
  moveButton?: boolean
) => {
  const newColumn = createElement({
    type: "div",
    className: ["board__column", "draggableContainer"],
    attr: { draggable: "true" },
  });

  const newColumnHeader = createElement({
    type: "div",
    className: ["board__column--header"],
    appendTo: newColumn,
  });

  createElement({
    type: "div",
    className: ["board__title"],
    content: column.title,
    appendTo: newColumnHeader,
  });

  createElement({
    type: "span",
    className: ["board__column--delete", "material-symbols-outlined"],
    content: "Delete",
    appendTo: newColumnHeader,
    onclick: (element) => deleteColumn(element),
  });

  createElement({
    type: "div",
    className: ["board__column--background", "draggableCardContainer"],
    style: { "--columnBgCol": `var(--${randomColumnColor()})` },
    appendTo: newColumn,
  });

  const addnewColumnContainer = document.querySelector(".board__container");
  addnewColumnContainer?.appendChild(newColumn);

  if (moveButton) {
    const elementToRemove =
      addnewColumnContainer?.childNodes.length !== undefined &&
      addnewColumnContainer?.childNodes[
        addnewColumnContainer?.childNodes.length - 2
      ];
    elementToRemove &&
      elementToRemove.parentNode?.replaceChild(newColumn, elementToRemove);
    createNewButtonToCreateColumn(addnewColumnContainer!);
  }
  if (position === "last") {
    createNewButtonToCreateColumn(addnewColumnContainer!);
  }
};
