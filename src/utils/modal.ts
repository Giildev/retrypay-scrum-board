import { modal, modalNewTask } from "./selectors";

export function openModal() {
  modal !== null && ((modal as HTMLElement).style.display = "block");
  modalNewTask !== null &&
    ((modalNewTask as HTMLElement).style.display = "block");
}

export function closeModal() {
  modal !== null && ((modal as HTMLElement).style.display = "none");
  modalNewTask !== null &&
    ((modalNewTask as HTMLElement).style.display = "none");
}
