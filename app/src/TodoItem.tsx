import { FunctionComponent } from "react";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <p className="has-space-between">
      <label
        className="checkbox"
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.content}
      </label>
      <button
        className="delete is-small"
        onClick={() => {
          deleteTodo(todo);
        }}
      ></button>
    </p>
  );
};
