import { useState } from 'react';
import { TodoList } from './TodoList'
import { AddTodoForm } from "./AddTodoForm"

let baseList = {
  name: "First list",
  todos: [
    {
      id: 1,
      content: "First task",
      complete: false,
    },
    {
      id: 2,
      content: "Second task",
      complete: false,
    }
  ]
}

function App() {
  const [list, setList] = useState(baseList);

  const toggleTodo = (selectedTodo: Todo) => {
    setList(list => {
      return {
        ...list,
        todos: list.todos.map(todo => {
          if (todo.id === selectedTodo.id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo;
        })
      }
    })
  }



  const addTodo = (content: string) => {
    const generateID = (): number => {
      return Math.floor(Math.random() * 100000)
    }

    const newTodo = { id: generateID(), content, complete: false }
    
    setList(list => {
      return {
        ...list,
        todos: [
          ...list.todos,
          newTodo
        ]
      }
    })
  }

  return (
    <div className="container has-text-centered">
      <div className="title">
        Todo List App
      </div>
      <div className="columns">
        <div className="column is-one-quarter box">
          <TodoList todos={list.todos} name={list.name} toggleTodo={toggleTodo} />
          <AddTodoForm todo={null} addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
