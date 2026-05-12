import { useState } from "react";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import TodoItems from "./components/TodoItems.jsx";
import useTasks from "./hooks/useTasks.jsx";
import { FILTERS } from "./constants/filters.js";
import FilterTodoItems from "./components/FilterTodoItems.jsx";

const defaultTodoItems = [
  {
    id: 0,
    content: "Something",
    done: false,
  },
  {
    id: 1,
    content: "Another",
    done: false,
  },
];

export default function App() {
  const {
    handleAddTask,
    todoItems,
    handleDeleteTask,
    toggleDoneTodo,
    clearCompleted,
  } = useTasks(defaultTodoItems);
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  const activeTodoItemsCount = todoItems.filter((item) => !item.done).length;
  let renderedTodoItems;

  switch (activeFilter) {
    case FILTERS.ACTIVE:
      renderedTodoItems = todoItems.filter((item) => !item.done);
      break;

    case FILTERS.COMPLETED:
      renderedTodoItems = todoItems.filter((item) => item.done);
      break;

    default:
      renderedTodoItems = todoItems;
      break;
  }

  function switchFilter(nextFilter) {
    if (nextFilter === activeFilter) return;

    setActiveFilter(nextFilter);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] md:dark:bg-[url('/images/bg-desktop-dark.jpg')] bg-size-[100%_40dvh] bg-no-repeat py-12 px-6">
      <main className="flex flex-col items-center">
        <div className="space-y-6 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <Header />
          <Form createTodoItem={handleAddTask} />
          <TodoItems
            todoItemsList={renderedTodoItems}
            deleteTodo={handleDeleteTask}
            toggleTodoDone={toggleDoneTodo}
            handleClearDone={clearCompleted}
            activeFilter={activeFilter}
            activeTodoItemsCount={activeTodoItemsCount}
            switchFilter={switchFilter}
          />
          <div className="flex py-4 px-8 bg-white rounded-md md:hidden w-full items-center justify-center gap-8">
            <FilterTodoItems
              switchFilter={switchFilter}
              activeFilter={activeFilter}
            />
          </div>
        </div>
        <div className="my-10">
          <span className="text-gray-600">Drag and drop to reorder list</span>
        </div>
      </main>
    </div>
  );
}
