import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setTodos(
          snapshot.docs.map(doc => ({
            id: doc.id,
            todo: doc.data().todo,
            //timestamp: doc.data().timestamp.toDate(),
          }))
        );
      });
  }, []);

  const onChange = event => {
    setInput(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="App">
      <h1>TO DO APP😎</h1>
      <FormControl>
        <InputLabel>🌈Wrtie a todo</InputLabel>
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

      <Todo todos={todos} />
    </div>
  );
}

export default App;
