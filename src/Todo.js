import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';

function Todo({ todos, created }) {
  return (
    <List>
      <ListItem>
        <ul>
          {todos.map(todo => (
            <ListItemText primary={todo} secondary={created + '🕗'} />
          ))}
        </ul>
      </ListItem>
    </List>
  );
}

export default Todo;
