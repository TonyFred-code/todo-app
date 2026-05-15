import { func, string } from "prop-types";
import { FILTERS } from "../constants/filters.js";

export default function FilterTodoItems({ switchFilter, activeFilter }) {
  return (
    <>
      <button
        type="button"
        className={`capitalize hover:text-navy-850 dark:hover:text-purple-100 font-bold cursor-pointer ${activeFilter === FILTERS.ALL ? "text-blue-500" : "text-gray-600 dark:text-purple-600"}`}
        onClick={() => switchFilter(FILTERS.ALL)}
      >
        all
      </button>
      <button
        type="button"
        className={`capitalize hover:text-navy-850 dark:hover:text-purple-100 font-bold cursor-pointer ${activeFilter === FILTERS.ACTIVE ? "text-blue-500" : "text-gray-600 dark:text-purple-600"}`}
        onClick={() => switchFilter(FILTERS.ACTIVE)}
      >
        active
      </button>
      <button
        type="button"
        className={`capitalize hover:text-navy-850 dark:hover:text-purple-100 font-bold cursor-pointer ${activeFilter === FILTERS.COMPLETED ? "text-blue-500" : "text-gray-600 dark:text-purple-600"}`}
        onClick={() => switchFilter(FILTERS.COMPLETED)}
      >
        completed
      </button>
    </>
  );
}

FilterTodoItems.propTypes = {
  switchFilter: func.isRequired,
  activeFilter: string.isRequired,
};
