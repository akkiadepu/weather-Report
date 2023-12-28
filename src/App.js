// import logo from './logo.svg';
// import axios from 'axios';
import './App.css';
import React,{useState} from 'react';
// import axios from 'axios';

function App() {
  // 1.use statue to store the api data
  const [city,setCity]=useState('');
  const [result,setResult]=useState('');
  const changeHandler=e=>{
    setCity(e.target.value)
  }

  // onsubmit to summit the value
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response=>response.json())
   
    .then(data => {
        const kelp=data.main.temp;
        const celcs=kelp-273.15;
        setResult("Temperature at"+" "+city+'\n'+ Math.round(celcs)+"°Cel")

      }).catch(error=>console.error(error));

    setCity('');
  }
  

  return (
    <div className='weather'>
    <div className="App">
      {/* wether App */}
      {/* https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb */}
      <div className='body'>
        <h1>weather Report</h1>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter the city' value={city} name='city' onChange={changeHandler}/>
        <br/> <br/>
        <input type='submit' value='Get Temperature' className='btn btn primary'/>
        </form>
      
      <div className='result'>
        <p></p>
        {/* <h2>{city}</h2> */}
        <p className='p'>{result}</p>
        
      </div>
      </div>

      
    </div>
    </div>
  );
}

export default App;
