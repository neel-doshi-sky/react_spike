import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import React,{useState} from 'react';

function App() {
 const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {
        setIsClicked(true);
      
      }}>CLICK TO EDIT</button>
      <TodoList isClicked = {isClicked}/>
    </div>
  );
}

export default App;
