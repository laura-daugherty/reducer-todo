import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
