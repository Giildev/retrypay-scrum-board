import { setStore } from "./store";

export const dragAndDrop = (itemToDrag: string, containerToFill: string) => {
  const item = document.querySelectorAll(itemToDrag);
  const container = document.querySelectorAll(containerToFill);
  let dragItem: Element | null = null;

  item.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
    draggable.addEventListener("dragend", dragEnd);
  });

  // Loop through empty boxes and add listeners
  for (const empty of container) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
  }

  // Drag Functions
  function dragStart(this: Element) {
    dragItem = this;
  }

  function dragEnd(this: Element) {}

  function dragOver(e: Event) {
    e.preventDefault();
  }

  function dragEnter(this: Element, e: Event) {
    e.preventDefault();
  }

  function dragLeave(this: Element) {}

  function dragDrop(this: Element) {
    dragItem !== null && this.append(dragItem);
  }
};
