import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import React,{useState} from 'react';
import { ThingsProvider } from './ThingsContext';

function App() {
 const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {
        setIsClicked(true);
      
      }}>CLICK TO EDIT</button>
      <ThingsProvider value={isClicked}>
      <TodoList />
      </ThingsProvider>
     
    </div>
  );
}

export default App;
