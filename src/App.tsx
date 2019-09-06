import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { TodoListComponent } from './components/molecules/todoList';
import { TodoItem } from './components/molecules/todoItem';
import { GlobalState } from './reducers';

interface AppProps {
  todos: TodoItem[]
}

function App(props: AppProps) {
  return (
    <div className="app">
      <TodoListComponent todos={props.todos} />
    </div>
  );
}

export default connect((state: GlobalState) => ({ 
  todos: state.todos
}))(App);
