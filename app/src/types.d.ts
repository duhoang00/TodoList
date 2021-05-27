interface Todo {
    id: number,
    content: string,
    complete: boolean,
}

interface TodoList {
    name:string, 
    todos: Array<Todo>
}