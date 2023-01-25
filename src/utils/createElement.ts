// Importing the necessary interface
import { IElementToCreate } from "../types";

// Function to create an element with specified attributes and properties
export const createElement = ({
  type,
  className,
  content,
  appendTo,
  style,
  id,
  attr,
  onclick,
}: IElementToCreate) => {
  // Creating the element
  const element = document.createElement(type);
  // Adding the specified classes to the element
  element.classList.add(...className);
  // Assigning the specified content to the element
  element.textContent = content!;
  // Appending the element to the specified parent element
  appendTo?.appendChild(element);
  // Assigning the specified id to the element
  id && (element.id = id.toString());
  // Applying the specified styles to the element
  style &&
    Object.entries(style).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  // Adding the specified attributes to the element
  attr &&
    Object.entries(attr).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  // Adding a click event listener to the element and calling the specified function
  onclick && element.addEventListener("click", (element) => onclick(element));

  // Returning the created element
  return element;
};
