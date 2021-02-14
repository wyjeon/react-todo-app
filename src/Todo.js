import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Input } from '@material-ui/core';
import './Todo.css';
import db from './firebase';

function Todo({ todos }) {
  const [input, setInput] = useState('');
  const [hidden, setHidden] = useState(true);

  const deleteTodo = todo => {
    db.collection('todos').doc(todo.id).delete();
  };

  const handleToggle = () => {
    setHidden(!hidden);
  };

  const updateTodo = todo => {
    db.collection('todos').doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setInput('');
  };

  const onChange = event => {
    setInput(event.target.value);
  };

  return (
    <>
      <List className="todo__list">
        <ListItem>
          <ul>
            <Input
              type={hidden ? 'hidden' : 'text'}
              value={input}
              onChange={onChange}
              placeholder="🛠Update a todo"
            />

            {todos.map((todo, index) => (
              <div key={index}>
                <ListItemText primary={todo.todo} secondary={`created: 🕗`} />

                <Button onClick={handleToggle}>🔧EDIT</Button>

                <Button onClick={deleteTodo.bind(this, todo)}>
                  ❌Delete TODO
                </Button>

                <Button onClick={updateTodo.bind(this, todo)}>
                  🛠Update TODO
                </Button>
              </div>
            ))}
          </ul>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
