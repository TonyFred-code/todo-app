import { func } from "prop-types";
import { useState } from "react";

export default function Form({ createTodoItem }) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    setText(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const inputText = new FormData(e.target).get("todo").trim();

    if (!inputText) return;

    createTodoItem(inputText);
    setText("");
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit} autoCapitalize="sentences">
        <div className="bg-white dark:bg-navy-900 rounded-md flex gap-4 items-center py-5 px-8 md:gap-6">
          <input
            type="text"
            name="todo"
            id="todo"
            value={text}
            onChange={handleUpdateText}
            placeholder="Create a new todo..."
            className="flex-1 outline-none caret-blue-500 min-w-0 text-navy-900 dark:text-gray-600"
          />
          <button
            type="submit"
            className="-order-1 shrink-0 size-6 rounded-full border-2 border-gray-300 inline-block hover:border-gray-500 cursor-pointer hover:bg-gray-300"
          >
            <span className="sr-only">submit</span>
          </button>
        </div>
      </form>
    </section>
  );
}

Form.propTypes = {
  createTodoItem: func.isRequired,
};
