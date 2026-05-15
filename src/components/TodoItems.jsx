import { arrayOf, bool, func, number, shape, string } from "prop-types";
import TodoItem from "./TodoItem.jsx";
import { pluralize } from "../lib/pluralize.js";
import FilterTodoItems from "./FilterTodoItems.jsx";
import { AnimatePresence, Reorder, useReducedMotion } from "motion/react";
import { FILTERS } from "../constants/filters.js";
import { useRef } from "react";

export default function TodoItems({
  todoItemsList,
  toggleTodoDone,
  deleteTodo,
  handleClearDone,
  activeFilter,
  switchFilter,
  activeTodoItemsCount,
  handleReorder,
}) {
  const shouldReduceMotion = useReducedMotion();
  const isDragging = useRef(null);

  function handleToggleTodoDone(todoItem) {
    if (isDragging.current) return;

    toggleTodoDone(todoItem);
  }

  return (
    <section className="overflow-x-hidden">
      <Reorder.Group
        className="bg-white dark:bg-navy-900 rounded-md *:not-last:border-b *:border-purple-300 dark:*:border-purple-800"
        values={todoItemsList}
        onReorder={(newOrder) => handleReorder(newOrder)}
      >
        <AnimatePresence initial={false}>
          {todoItemsList.map((todoItem) => {
            const { id, content, done } = todoItem;
            return (
              <Reorder.Item
                key={id}
                value={todoItem}
                drag={activeFilter === FILTERS.ALL ? "y" : false}
                onDrag={() => (isDragging.current = true)}
                onDragEnd={() => {
                  setTimeout(() => {
                    isDragging.current = false;
                  }, 300);
                }}
                initial={{ x: shouldReduceMotion ? 0 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: shouldReduceMotion ? 0 : 300, opacity: 0 }}
              >
                <TodoItem
                  id={id}
                  content={content}
                  done={done}
                  handleDelete={() => deleteTodo(id)}
                  toggleDone={() => handleToggleTodoDone(todoItem)}
                />
              </Reorder.Item>
            );
          })}
        </AnimatePresence>
        <li className="flex justify-between py-5 px-8">
          <span className="text-gray-600 dark:text-purple-600">
            {activeTodoItemsCount} {pluralize(activeTodoItemsCount, "item")}{" "}
            left
          </span>
          <div className="hidden md:flex gap-4 capitalize">
            <FilterTodoItems
              activeFilter={activeFilter}
              switchFilter={switchFilter}
            />
          </div>
          <button
            type="button"
            className="cursor-pointer text-gray-600 hover:text-navy-900 dark:hover:text-purple-100  dark:text-purple-600"
            onClick={handleClearDone}
          >
            Clear completed
          </button>
        </li>
      </Reorder.Group>
    </section>
  );
}

TodoItems.propTypes = {
  todoItemsList: arrayOf(
    shape({
      done: bool,
      id: string,
      content: string,
    })
  ).isRequired,
  toggleTodoDone: func.isRequired,
  deleteTodo: func.isRequired,
  handleClearDone: func.isRequired,
  switchFilter: func.isRequired,
  activeFilter: string.isRequired,
  activeTodoItemsCount: number.isRequired,
  handleReorder: func.isRequired,
};
