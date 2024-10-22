import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoSearch} from './TodoSearch';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Cut Onions', completed: true},
  {text: 'Take course of React', completed: false},
  {text: 'Cry with the cryer', completed: false},
  {text: 'LALALALALA', completed: false},
  {text: 'LALALALALALA', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      
      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
