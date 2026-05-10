import { useReducer } from "react";
import { ACTIONS } from "../constants/tasksReducer.js";

function taskReducer(todoItems, action) {
  switch (action.type) {
    case ACTIONS.ADDED:
      return [
        ...todoItems,
        {
          id: action.id,
          content: action.content,
          done: false,
        },
      ];

    case ACTIONS.DELETED:
      return todoItems.filter((item) => item.id !== action.id);

    case ACTIONS.CHANGED:
      return todoItems.map((item) => {
        if (item.id === action.todoItem.id) {
          return action.todoItem;
        } else {
          return item;
        }
      });

    case ACTIONS.CLEARED_DONE:
      return todoItems.filter((item) => !item.done);

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function useTasks(initialTasks) {
  const [todoItems, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(content) {
    dispatch({
      type: ACTIONS.ADDED,
      id: crypto.randomUUID(),
      content: content,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: ACTIONS.DELETED,
      id: taskId,
    });
  }

  function toggleDoneTodo(todoItem) {
    dispatch({
      type: ACTIONS.CHANGED,
      todoItem: {
        ...todoItem,
        done: !todoItem.done,
      },
    });
  }

  function clearCompleted() {
    dispatch({
      type: ACTIONS.CLEARED_DONE,
    });
  }

  return {
    handleAddTask,
    todoItems,
    handleDeleteTask,
    toggleDoneTodo,
    clearCompleted,
  };
}
