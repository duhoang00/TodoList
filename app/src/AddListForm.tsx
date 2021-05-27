import { FunctionComponent, useState } from "react";

type AddListFormProps = {
  name: string | null;
  todos: [];
  addList: (name: string) => void;
};

export const AddListForm: FunctionComponent<AddListFormProps> = ({
  addList,
}) => {
  const [name, setName] = useState("");
  return (
    <div className="mt-3">
      <form className="is-flex">
        <input
          className="input is-small"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="button is-small is-success"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addList(name);
            setName("");
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
