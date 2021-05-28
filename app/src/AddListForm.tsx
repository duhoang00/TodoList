import { FunctionComponent, useState } from "react";

type AddListFormProps = {
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
          placeholder="List name"
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
            if (name !== "") {
              addList(name);
            } else {
              window.alert("List name can not be empty, bro !?");
            }

            setName("");
          }}
        >
          Add List
        </button>
      </form>
    </div>
  );
};
