import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <h1>My bio</h1>
        
        <table id='students'>
        
               <tbody>
                  
                  <tr><td>Name</td><td>{data.name}</td></tr>
                  <tr><td>Age</td><td>{data.age}</td></tr>
                  <tr><td>Gender</td><td>{data.gender}</td></tr>
                  <tr><td>Hobby</td><td>{data.hobby}</td></tr>
                  <tr><td>Experience</td><td>{data.experience}</td></tr>
               
               </tbody>
            </table>
            <button onClick={() =>hello(data.name)}>Click</button>
    </div>
  );
  
}
const hello = name => {
  alert(name);
}

export default App;