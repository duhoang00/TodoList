import { FunctionComponent } from "react";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  id: number;
  name: string;
  todos: Todo[];
  toggleTodo: (listID: number, todo: Todo) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({
  id,
  name,
  todos,
  toggleTodo,
}) => {
  return (
    <div>
      <div className="has-text-weight-bold">{name}</div>
      <div className="has-text-left">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={(todo) => toggleTodo(id, todo)}
          />
        ))}
      </div>
    </div>
  );
};
