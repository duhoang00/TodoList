import { FunctionComponent } from "react";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <p>
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
    </p>
  );
};
