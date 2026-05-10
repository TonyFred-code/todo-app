import { arrayOf, bool, func, number, shape, string } from "prop-types";
import TodoItem from "./TodoItem.jsx";
import { pluralize } from "../lib/pluralize.js";
import FilterTodoItems from "./FilterTodoItems.jsx";

export default function TodoItems({
  todoItemsList,
  toggleTodoDone,
  deleteTodo,
  handleClearDone,
  activeFilter,
  switchFilter,
  activeTodoItemsCount,
}) {
  return (
    <section>
      <ul className="bg-white rounded-md *:not-last:border-b *:border-gray-300">
        {todoItemsList.map((todoItem) => {
          const { id, content, done } = todoItem;

          return (
            <TodoItem
              key={id}
              content={content}
              done={done}
              handleDelete={() => deleteTodo(id)}
              toggleDone={() => toggleTodoDone(todoItem)}
            />
          );
        })}
        <li className="flex justify-between py-5 px-8">
          <span className="text-gray-600">
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
            className="cursor-pointer text-gray-600 hover:text-navy-900"
            onClick={handleClearDone}
          >
            Clear completed
          </button>
        </li>
      </ul>
    </section>
  );
}

TodoItems.propTypes = {
  todoItemsList: arrayOf(
    shape({
      done: bool,
      id: number,
      content: string,
    })
  ).isRequired,
  toggleTodoDone: func.isRequired,
  deleteTodo: func.isRequired,
  handleClearDone: func.isRequired,
  switchFilter: func.isRequired,
  activeFilter: string.isRequired,
  activeTodoItemsCount: number.isRequired,
};
