import { TODO_ITEMS_LOCAL_STORAGE_KEY } from "../constants/todoItem.js";
import { DEFAULT_TODO_ITEMS } from "../data/defaultTodoItems.js";

function getDefaultTodoItems() {
  let defaultTodo = [];

  try {
    defaultTodo =
      JSON.parse(localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY)) ||
      DEFAULT_TODO_ITEMS;
  } catch {
    defaultTodo = DEFAULT_TODO_ITEMS;
  }

  return defaultTodo;
}

export { getDefaultTodoItems };
