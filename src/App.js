<<<<<<< HEAD
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
=======
import React from "react"
import TodoItem from "./Componenets/TodoItem"
import todosData from "./Componenets/todosData"
import style from "./index.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                <h1>To-Do Tasks</h1>
                {todoItems}
            </div>
        )    
    }
}

export default App
>>>>>>> b29e7d4ce987d30986039a964ecc39d7cfedf21b
