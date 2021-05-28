import { FunctionComponent, useState } from "react";

type AddTodoFormProps = {
  listID: number;
  todo: Todo | null;
  addTodo: (listID: number, content: string) => void;
};

export const AddTodoForm: FunctionComponent<AddTodoFormProps> = ({
  listID,
  addTodo,
}) => {
  const [content, setContent] = useState("");
  return (
    <div className="mt-3">
      <form className="is-flex">
        <input
          className="input is-small"
          type="text"
          value={content}
          placeholder="Task name"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button
          className="button is-small is-success"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (content !== "") {
              addTodo(listID, content);
            } else {
              window.alert("Task can not be empty, bro !?");
            }

            setContent("");
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
