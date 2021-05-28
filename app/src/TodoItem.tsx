import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo, newContent: string) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState(todo.content);
  return (
    <div className="field">
      <p className="control has-space-between">
        <span>
          <label
            className="checkbox"
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {editing ? (
              <input
                className="input is-small"
                type="text"
                defaultValue={todo.content}
                onChange={(e) => {
                  setNewContent(e.target.value);
                }}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  onClick={() => {
                    toggleTodo(todo);
                  }}
                />{" "}
                {todo.content}
              </>
            )}
          </label>
        </span>

        <span className="buttons m-0">
          <button className="button m-0 is-very-small">
            <FontAwesomeIcon
              icon={editing ? faCheck : faPen}
              onClick={(e) => {
                if (editing) {
                  setEditing(false);
                  if (newContent !== "") {
                    editTodo(todo, newContent);
                  } else {
                    window.alert("Do not make it empty, bro !?");
                  }
                } else {
                  setEditing(true);
                }
              }}
            />
          </button>
          <button
            className="delete m-0 ml-1 is-small"
            onClick={() => {
              deleteTodo(todo);
            }}
          ></button>
        </span>
      </p>
    </div>
  );
};
