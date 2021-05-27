interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

interface TodoList {
  id: number;
  name: string;
  todos: Array<Todo>;
}
