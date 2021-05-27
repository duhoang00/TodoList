import { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { AddListForm } from "./AddListForm";

// let baseList: TodoList  = {
//   name: "First list",
//   todos: []
// }

let baseAllList: TodoList[] = [];

function App() {
  const generateID = (): number => {
    return Math.floor(Math.random() * 100000);
  };

  const [allLists, setAllLists] = useState(baseAllList);
  // const [list, setList] = useState(baseList);

  console.log(allLists);

  const addList = (name: string) => {
    const newList = { id: generateID(), name: name, todos: [] };
    setAllLists((allLists) => [...allLists, newList]);
  };

  const addTodo = (listID: number, content: string) => {
    const newTodo = { id: generateID(), content, complete: false };
    setAllLists(
      allLists.map((list) => {
        if (list.id === listID) {
          return {
            ...list,
            todos: [...list.todos, newTodo],
          };
        }
        return list;
      })
    );
  };

  const toggleTodo = (listID: number, selectedTodo: Todo) => {
    setAllLists(
      allLists.map((list) => {
        if (list.id === listID) {
          return {
            ...list,
            todos: list.todos.map((todo) => {
              if (todo.id === selectedTodo.id) {
                return {
                  ...todo,
                  complete: !todo.complete,
                };
              }
              return todo;
            }),
          };
        }
        return list;
      })
    );
  };

  return (
    <div className="container has-text-centered">
      <div className="title">Todo List App</div>
      <div className="columns is-multiline is-variable is-8">
        {allLists.map((list) => (
          <div key={list.id} className="column is-one-quarter">
            <div className="box">
              <TodoList
                id={list.id}
                todos={list.todos}
                name={list.name}
                toggleTodo={toggleTodo}
              />
              <AddTodoForm
                listID={list.id}
                todo={null}
                addTodo={(list.id, addTodo)}
              />
            </div>
          </div>
        ))}
        <div className="column is-one-quarter">
          <div className="box">
            <div className="has-text-weight-bold">Add new list</div>
            <AddListForm addList={addList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
