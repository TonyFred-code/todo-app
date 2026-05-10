import { bool, func, string } from "prop-types";

export default function TodoItem({ handleDelete, done, content, toggleDone }) {
  return (
    <li className="group flex gap-4 md:gap-6 py-5 px-8 items-center">
      <button
        type="button"
        className={`rounded-full border border-gray-300 cursor-pointer size-6 inline-flex items-center justify-center ${done ? "bg-linear-to-br from-fuchsia-400 to-sky-400" : "bg-transparent"}`}
        onClick={toggleDone}
      >
        {done && (
          <span>
            <img src="/images/icon-check.svg" alt="" />
          </span>
        )}
        <span className="sr-only">
          {done ? "Mark as incomplete" : "Mark as complete"}
        </span>
      </button>
      <p
        onClick={toggleDone}
        className={`flex-1 cursor-pointer after:absolute relative after:top-1/2 after:left-0 after:w-full after:h-0.5 after:will-change-transform after:-translate-y-1/2 after:bg-[currentColor] after:origin-left after:transition-all after:duration-300 after:ease-in ${done ? "text-gray-300 after:scale-x-100" : "text-navy-850 after:scale-x-0"}`}
      >
        {content}
      </p>
      <button
        type="button"
        className="lg:group-hover:visible lg:invisible flex items-center justify-center size-6 cursor-pointer"
        onClick={handleDelete}
      >
        <img src="/images/icon-cross.svg" alt="" />
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  handleDelete: func.isRequired,
  done: bool.isRequired,
  content: string.isRequired,
  toggleDone: func.isRequired,
};
