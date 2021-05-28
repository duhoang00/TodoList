import { FunctionComponent } from "react";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  id: number;
  name: string;
  todos: Todo[];
  toggleTodo: (listID: number, todo: Todo) => void;
  deleteTodo: (listID: number, todo: Todo) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({
  id,
  name,
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div>
      <div className="has-text-weight-bold has-text-centered">{name}</div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={(todo) => toggleTodo(id, todo)}
            deleteTodo={(todo) => deleteTodo(id, todo)}
          />
        ))}
      </div>
    </div>
  );
};
