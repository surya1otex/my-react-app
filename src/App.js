import './App.css';
import { useState } from 'react';


function App() {

  const [text, setText] = useState('Welcome To React Js');

  const [count, setCount] = useState(1);

  const names = ['Preeti Baskey','Hrushi','Soumya','Ibrahim','Surya','Indradev'];

  const [employees, setEmployees] = useState(names);

   
   
  //employees.push('');
 
 
  function setevent() {
    setText('I Love React');
  }

  function addemployee(e) {
        //employees.push('Errota');
        //alert(employees);
      setEmployees(employees.push('Manoj'));
  }

  console.log(employees);
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={addemployee} placeholder="New Employee name" />
      <ul>
          {employees.map(function(name, index){
                return <li key={ index }>{name}</li>;
           })}
       </ul>
        <h2>{count}</h2>
        <h3>{text}</h3>
        <button onClick={() => setevent()}>ChangeText</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    </div>
  );
}



export default App;
