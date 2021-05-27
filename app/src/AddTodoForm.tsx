import { FunctionComponent, useState } from "react";

type AddTodoFormProps = {
    todo: Todo | null,
    addTodo: (content: string) => void
}

export const AddTodoForm: FunctionComponent<AddTodoFormProps> = ({ addTodo }) => {
    const [content, setContent] = useState("");
    return (
        <div className="mt-3">
            <form className="is-flex">
                <input className="input is-small" type="text" value={content}
                    onChange={e => {
                        setContent(e.target.value);
                    }}
                />
                <button className="button is-small is-success" type="submit" onClick={e => { 
                    e.preventDefault(); addTodo(content); setContent(''); }}>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

