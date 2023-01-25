import { renderCards } from "./cards/renderCards";
import { renderColumns } from "./columns/renderColumns";
import { dragAndDrop } from "./utils/dragAndDrop";
import {
  closeModalListener,
  createNewColumnLoop,
  openModalListener,
  submitModalListener,
} from "./utils/helper";

document.addEventListener("DOMContentLoaded", () => {
  renderColumns();
  renderCards();
  createNewColumnLoop();
  openModalListener();
  closeModalListener();
  submitModalListener();
  dragAndDrop(".draggableCard", ".draggableCardContainer");

  // TODO: Complete Drag and Drop Columns
  // dragAndDrop(".draggableColumn", ".draggableColumnContainer");
});
