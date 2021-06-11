import { FunctionComponent, useState } from "react";
import { ValidateInput } from "./Validate";

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
            if (ValidateInput(content)) {
              addTodo(listID, content);
            } else {
              window.alert("Wrong input");
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
