import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import React,{useState, useEffect} from 'react';
import { ThingsProvider } from './ThingsContext';

function App() {
 const [isClicked, setIsClicked] = useState(false)
 const [counter, setCounter] = useState(0);
 const [todoList, setTodoList] = useState([])
 useEffect(() => {
  setTodoList([...todoList, "new task " + counter]);
 }, [counter])
 
  return (
    <div className="App">
      <button onClick={() => {
        setIsClicked(true);
        setCounter(counter+1);
      
      }}>CLICK TO ADD TODO ITEM</button>
      <ThingsProvider value={isClicked}>
      <TodoList todoList={todoList}/>
      </ThingsProvider>
     
    </div>
  );
}

export default App;
