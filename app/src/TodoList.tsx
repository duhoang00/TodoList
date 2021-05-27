import { FunctionComponent } from "react"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
    name: string,
    todos: Todo[],
    toggleTodo: (todo: Todo) => void
}

export const TodoList: FunctionComponent<TodoListProps> = ({ name, todos, toggleTodo }) => {
    return (
        <div>
            <div className="has-text-weight-bold">
                {name}
            </div>
            <div className="has-text-left">
                {
                    todos.map(todo => (
                        <TodoItem key={todo.content} todo={todo} toggleTodo={toggleTodo} />
                    ))
                }
            </div>
        </div>
    )
}