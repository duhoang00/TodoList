import { FunctionComponent, useState } from "react";
import { TodoItem } from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

type TodoListProps = {
  id: number;
  name: string;
  todos: Todo[];
  toggleTodo: (listID: number, todo: Todo) => void;
  deleteTodo: (listID: number, todo: Todo) => void;
  editTodo: (listID: number, todo: Todo, newContent: string) => void;
  editList: (listID: number, newName: string) => void;
  deleteList: (listID: number) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({
  id,
  name,
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  editList,
  deleteList,
}) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  return (
    <div>
      <div className="has-text-centered">
        <span className="has-text-weight-bold">
          {editing ? (
            <input
              className="input is-small"
              type="text"
              defaultValue={name}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
          ) : (
            <>{name}</>
          )}
        </span>
        <span className="">
          <button className="button m-0 is-very-small">
            <FontAwesomeIcon
              icon={editing ? faCheck : faPen}
              onClick={(e) => {
                if (editing) {
                  setEditing(false);
                  editList(id, newName);
                } else {
                  setEditing(true);
                }
              }}
            />
          </button>
          <button
            className="delete m-0 ml-1 is-small"
            onClick={() => {
              deleteList(id);
            }}
          ></button>
        </span>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={(todo) => toggleTodo(id, todo)}
            deleteTodo={(todo) => deleteTodo(id, todo)}
            editTodo={(todo, newContent) => editTodo(id, todo, newContent)}
          />
        ))}
      </div>
    </div>
  );
};
