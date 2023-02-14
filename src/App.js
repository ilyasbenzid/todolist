import { useState } from 'react';
import './App.css';
import AddTsk from './Components/AddTsk';
import Cards from './Components/Cards';

function App() {
  const [tasks,settasks]=useState([
    {name:"eat", done:false},
    {name:"sleep", done:true},
    {name:"sport", done:false},
    {name:"music",done:true},
  ])
  const addnew=(x)=>{
    settasks([x,...tasks])
  }
  return (
    <div className="App">
      <header className="App-header">
        <AddTsk fnc={addnew}/>
     {tasks.map((el)=><Cards task={el} />)}
      </header>
    </div>
  );
}

export default App;
