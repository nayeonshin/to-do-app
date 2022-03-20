import { useState } from "react";

import { nanoid } from "nanoid";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
  };

  return (
    <div>
      <h1>To-Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="Write your to do..."
          type="text"
          value={toDo}
        />
        <button>Add a to-do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo) => (
          <li key={nanoid()}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
