import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counter = (state= 5, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  onIncrement(){
    store.dispatch({type: "INCREMENT"})
  }

  onDecrement(){
    store.dispatch({type: "DECREMENT"})
  }

  render() {
    return(
      <div>
        <h1>Hello {this.props.value} World</h1>
        <button onClick={this.onIncrement.bind(this)}> + </button>
        <button onClick={this.onDecrement.bind(this)}> - </button> 
      </div>
    )
  }
}

const render = () => { ReactDOM.render(<Counter value={store.getState()}
  // onIncrement= { () => {
  //   console.log(store.getState())
  //   store.dispatch({type: "INCREMENT"})
  //   }
  // }
  // onDecrement = {() => 
  //   store.dispatch({type: "DECREMENT"})
  //  }
  />, document.getElementById("main")
  )}
render();
store.subscribe(render) 



