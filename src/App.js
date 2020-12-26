import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initialValues = {
	salary: '',
}

function App() {
  const [state, setState] = useState(initialValues);

  const [salary,setSalary]= useState(0);
  const [atSalary,setatSalary]= useState(0);

  const [salaryTwo,setSalaryTwo]= useState(0);
  const [atSalaryTwo,setatSalaryTwo]= useState(0);


  const [clear,setClear]=useState(false);

  const Taxify=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let salary=document.querySelector('#num').value
    let city=document.querySelector('#city').value
    if(salary=='')
    return;

    if(city == "San Francisco") {
      let sum= salary - salary * .35;
      setatSalary(sum);
      return;
    }

    let sum= salary - salary * .25;
    setatSalary(sum);
  }

  const TaxifyTwo=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let salary=document.querySelector('#num2').value
    let city=document.querySelector('#city2').value
    if(salary=='')
    return;

    if(city == "San Francisco") {
      let sum= salary - salary * .35;
      setatSalaryTwo(sum);
      return;
    }

    let sum= salary - salary * .25;
    setatSalaryTwo(sum);
  }

  return (
    <div className="App">

      <header className="My-header">
        <p>
          Salary comparison tool
        </p>
      </header>

      <header className="App-header">

      <div class="float-child">
        <p> select city one: </p>
        <form>
          <input type="text" id="num" placeholder="Enter Salary"/><br />
          <input list="cities" name="cities" id="city"/>
          <datalist id="cities">
            <option value="Kansas city" />
            <option value="San Francisco" />
          </datalist>
          <button onClick={Taxify}>Calculate</button><br /><br />
          <button>After Tax income</button>
          <input type="text" id="result" value={atSalary}  readOnly /><br/>
        </form>
      </div>

      <div class="float-child">
        <p> select city two: </p>
        <form>
          <input type="text" id="num2" placeholder="Enter Salary"/><br />
          <input list="cities" name="cities" id="city2"/>
          <datalist id="cities">
            <option value="Kansas city" />
            <option value="San Francisco" />
          </datalist>
          <button onClick={TaxifyTwo}>Calculate</button><br /><br />
          <button>After Tax income</button>
          <input type="text" id="result" value={atSalaryTwo} readOnly /><br/>
        </form>
      </div>

      </header>
    </div>
  );
}

export default App;
