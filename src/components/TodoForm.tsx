import { FaPlusCircle } from "react-icons/fa";

const TodoForm = ({ userInputField, addTodoItemToList, setUserInputField }) => {
  return (
    <>
      <form>
        <div className="flex items-center justify-around gap-x-2">
          <label htmlFor="add todo item" aria-label="add to do item">
            Add task
          </label>

          <input
            type="text"
            className="user-input-field w-1/2 border border-none px-2 py-1 ring-1 ring-blue-300 focus:outline-none focus:ring-1 focus:ring-zinc-800 rounded-sm"
            value={userInputField}
            onChange={(e) => setUserInputField(e.target.value)}
          />
          <button
            className="px-2 py-2 text-xl hover:text-blue-300 hover:transition-all hover:duration-100 focus:outline-none focus:ring-1"
            type="submit"
            aria-label="addTodoButton"
            onClick={addTodoItemToList}
          >
            <FaPlusCircle />
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
