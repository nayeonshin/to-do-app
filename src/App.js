import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDo("");
    setToDos((currentToDos) => [toDo, ...currentToDos]);
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
    </div>
  );
}

export default App;
