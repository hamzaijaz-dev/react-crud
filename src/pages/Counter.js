import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [previous, setPrevious] = useState("");

  const onDec = () => {
    if (count > 0) setCount(count - 1);
  };

  const addToList = () => {
    setTodos([...todos, value]);

    setValue("");
  };

  const removeFromList = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const showValue = (todo) => {
    setValue(todo);
    setPrevious(todo);
  };

  const updateToList = () => {
    setTodos(
      todos.map((t) => {
        if (t === previous) t = value;
        return t;
      })
    );
    setValue("");
    setPrevious("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Counter: {count}</h1>

          <Button variant="danger" onClick={onDec}>-</Button>{' '}
          <Button variant="success" onClick={() => setCount(count + 1)}>+</Button>

        <hr />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {previous ? (
          <Button onClick={updateToList}>Update</Button>
        ) : (
          <Button onClick={addToList}>Add</Button>
        )}

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span onClick={() => showValue(todo)}> {todo} </span>
              <Button onClick={() => removeFromList(todo)}> x </Button>
            </li>
          ))}
        </ul>

        <hr />
      </div>
    </div>
  );
}
