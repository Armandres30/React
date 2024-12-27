import './TodoCounter.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter({ total, completed }) {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return (
    <h1>
      You've completed <span> {completed} </span> of <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
