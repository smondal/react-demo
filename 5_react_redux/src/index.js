import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import deepFreeze from 'deep-freeze'
import expect from 'expect'


const todos = (state= [], action) => {
  switch(action.type){
    case "ADD_TODO":
      return [ ...state, {
        id: action.id,
        text:action.text,
        completed: false
      }]
    case 'TOGGGLE_TODO':
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo;
        }
        return Object.assign({}, todo, { completed: !todo.completed})
      })
    default:
      return state;
  }
}

const visibilityFilter = (state = "SHOW_ALL", action) =>{
  switch(action.type){
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default: 
      return state
  }
}

const todoCombineReducer = combineReducers({
  todos, visibilityFilter
})

const FilterLink = ({
  filter,
  children
}) => {
  return (
    <a href="#"
      onClick={e => {e.preventDefault();
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter
        })
      }}
      >
      {children}
      </a>
  )
}

const getVisibiltyTodos = (todos, filter) =>{
  switch(filter){
    case "SHOW_ALL" :
      return todos
    case "SHOW_COMPLETED" :
      return todos.filter(t => t.completed)
    case "SHOW_ACTIVE" :
      return todos.filter(t => !t.completed)
  }
}


let nextTodoId = 0;
class TodoApp extends React.Component{

  dispatchAddTodo(){
    store.dispatch({
      type: "ADD_TODO",
      text: this.refs.add_todo.value,
      id: nextTodoId++
    })
  }

  render() {
    const visibleTodos = getVisibiltyTodos(this.props.todos, this.props.visibilityFilter)
    return(
      <div>
        
        <input type="text" ref="add_todo" />
        <button onClick={this.dispatchAddTodo.bind(this)}>Add </button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id} onClick={() => {
              store.dispatch({
                type: "TOGGGLE_TODO",
                id: todo.id
              })
            }}
            style = {{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            >
              {todo.text}
            </li>
            )}
        </ul>
        <p>
          Show: 
          <FilterLink filter="SHOW_ALL"> All</FilterLink>
          <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
          <FilterLink filter="SHOW_COMPLETED"> Complete</FilterLink>
        </p>
      </div>
    )
  }
}

const store = createStore(todoCombineReducer)

const render = () => { ReactDOM.render(<TodoApp {...store.getState()} />, document.getElementById("main")
  )}
render();
store.subscribe(render) 

