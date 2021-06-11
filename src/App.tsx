import { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { AddListForm } from "./AddListForm";

let baseAllList: TodoList[] = [];

function App() {
  const generateID = (): number => {
    return Math.floor(Math.random() * 100000);
  };

  const [allLists, setAllLists] = useState(baseAllList);

  const addList = (name: string) => {
    const newList = { id: generateID(), name: name, todos: [] };
    setAllLists((allLists) => [...allLists, newList]);
  };

  const editList = (listID: number, newName: string) => {
    setAllLists(
      allLists.map((list) => {
        if (list.id === listID) {
          list.name = newName;
        }
        return list;
      })
    );
  };

  const deleteList = (listID: number) => {
    setAllLists(
      allLists.reduce((arr: TodoList[], list) => {
        if (list.id !== listID) {
          arr.push(list);
        }
        return arr;
      }, [])
    );
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

  const deleteTodo = (listID: number, selectedTodo: Todo) => {
    setAllLists(
      allLists.map((list) => {
        if (list.id === listID) {
          return {
            ...list,
            todos: list.todos.reduce((arr: Todo[], todo) => {
              if (todo.id !== selectedTodo.id) {
                arr.push(todo);
              }
              return arr;
            }, []),
          };
        }
        return list;
      })
    );
  };

  const editTodo = (listID: number, selectedTodo: Todo, newContent: string) => {
    setAllLists(
      allLists.map((list) => {
        if (list.id === listID) {
          return {
            ...list,
            todos: list.todos.map((todo) => {
              if (todo.id === selectedTodo.id) {
                return {
                  ...todo,
                  content: newContent,
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
    <div className="container">
      <div className="title has-text-centered">Todo List App</div>
      <div className="columns is-multiline is-variable is-8">
        {allLists.map((list) => (
          <div key={list.id} className="column is-one-quarter">
            <div className="box">
              <TodoList
                id={list.id}
                todos={list.todos}
                name={list.name}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                editList={editList}
                deleteList={deleteList}
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
            <div className="has-text-weight-bold has-text-centered">
              Add new list
            </div>
            <AddListForm addList={addList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
