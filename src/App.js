import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const onChange = event => {
    setInput(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  const created = Date.now();

  return (
    <div className="App">
      <h1>TO DO APP😎</h1>
      <FormControl>
        <InputLabel>✅Wrtie a todo</InputLabel>
        <Input value={input} onChange={onChange} />
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </FormControl>

      <Todo todos={todos} created={created} />
    </div>
  );
}

export default App;
