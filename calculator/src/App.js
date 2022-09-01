import React, {useReducer} from 'react';
import './App.scss';

const initialState = 
  {
    first: '',
    operation: null,
    second: '',
    show: "0",
  };


const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
        //Handle cases for "first" and "second" input
        if (state.operation == null){
          const concated = state.first.concat(action.input)
          return {...state, show: concated, first: concated}
        } else {
          const concated = state.second.concat(action.input)
          return {...state, show: concated, second: concated}
        }

    case "OPERATOR":
      //Deal with chaining the output of one operation into the next operation
      if (state.second.length > 0){
        const result = state.operation(state.first, state.second)
        return {...initialState, first: result, show: result, operation: action.operation}
      }  else {
        return {...state, operation: action.operation}
      }

    case "CLEAR":
      return initialState

    default:
      throw new Error("Should never get here")
  }
};

//Operations
const add = (first, second) => {
  const result = Number(first) + Number (second)
  return result.toString();
}

const subtract = (first, second) => {
  const result = Number(first) - Number (second)
  return result.toString();
}

const multiply = (first, second) => {
  const result = Number(first) * Number (second)
  return result.toString();
}

const divide = (first, second) => {
  const result = Number(first) / Number (second)
  return result.toString();
}

function App() {
  const [calcState, dispatch] = useReducer(reducer, initialState);

  return (
    <div class='container'>
      <div class='output'>
        <span class="output--text">{calcState.show}</span>
      </div>
      <div class="buttonContainer">
        <button class="doubleWideButton">Rad | Deg</button>
        <button>x!</button>
        <button>(</button>
        <button>)</button>
        <button>%</button>
        <button onClick={() => dispatch({type: 'CLEAR'})}>AC</button>
        <button>Inv</button>
        <button>sin</button>
        <button>ln</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "7"})}>7</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "8"})}>8</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "9"})}>9</button>
        <button onClick={() => dispatch({type: 'OPERATOR', operation: divide})}>÷</button>
        <button>π</button>
        <button>cos</button>
        <button>log</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "4"})}>4</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "5"})}>5</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "6"})}>6</button>
        <button onClick={() => dispatch({type: 'OPERATOR', operation: multiply})}>X</button>
        <button>e</button>
        <button>tan</button>
        <button>√</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "1"})}>1</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "2"})}>2</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "3"})}>3</button>
        <button onClick={() => dispatch({type: 'OPERATOR', operation: subtract})}>-</button>
        <button>Ans</button>
        <button>EXP</button>
        <button><span>x<sup>y</sup></span></button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "0"})}>0</button>
        <button class="btn--light" onClick={() => dispatch({type: 'INPUT', input: "."})}>.</button>
        <button class="btn--blue" onClick={() => dispatch({type: 'OPERATOR', operation: null})}>=</button>
        <button onClick={() => dispatch({type: 'OPERATOR', operation: add})}>+</button>
        
      </div>
    </div>
      
  );
}

export default App;
