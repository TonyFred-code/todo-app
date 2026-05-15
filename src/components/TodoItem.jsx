import { bool, func, string } from "prop-types";

export default function TodoItem({
  id,
  handleDelete,
  done,
  content,
  toggleDone,
}) {
  return (
    <div className="group flex gap-4 md:gap-6 py-5 px-8 items-center">
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          name="done"
          id={id}
          className="appearance-none"
          onChange={toggleDone}
          checked={done}
        />
        <label
          htmlFor={id}
          className={`rounded-full border border-gray-300 cursor-pointer size-6 inline-flex items-center justify-center ${done ? "bg-linear-to-br from-fuchsia-400 to-sky-400" : "bg-transparent"}`}
        >
          {done && (
            <span>
              <img src="/images/icon-check.svg" alt="" />
            </span>
          )}
        </label>
      </div>

      <p className="flex-1">
        <label
          htmlFor={id}
          className={`w-full inline-flex cursor-pointer after:absolute relative after:top-1/2 after:left-0 after:w-full after:h-0.5 after:will-change-transform after:-translate-y-1/2 after:bg-[currentColor] after:origin-left after:transition-all after:duration-300 after:ease-in ${done ? "text-gray-300 after:scale-x-100" : "text-navy-850 dark:text-gray-300 after:scale-x-0"}`}
        >
          {content}
        </label>
      </p>
      <button
        type="button"
        className="delete-btn flex items-center justify-center size-6 cursor-pointer"
        onClick={handleDelete}
        aria-label="Delete todo"
      >
        <img src="/images/icon-cross.svg" alt="" />
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  handleDelete: func.isRequired,
  done: bool.isRequired,
  content: string.isRequired,
  toggleDone: func.isRequired,
  id: string.isRequired,
};
