import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { event } from './components/db';
import Calendar from "react-calendar"
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function App() {
let [value,onChange]=useState(Date());
let [cl,onCl]=useState(false);
let [men,onMen]=useState(false);
let date=Date().split(" ");

let data=event.filter((ele,i)=>{
  if(ele.date==date[2]&&ele.month==date[1]){
    return true
  }else{
    return false;
  }
})
console.log(data);

console.log(date);

  return (
    <div className="App">
      <div className='nav'>
      <div className='dateBox'>
        
        <h6 className='head'>CALENDAR</h6>
      <h4 className='date'>{`${date[0]},${date[2]} ${date[1]}`}</h4>
     </div> <button className='change' onClick={()=>{onCl(!cl)}}> <img className='expImg'
      src='https://www.svgrepo.com/show/432477/expand-more.svg' alt='none'/> </button> 
       </div>
       <Calendar className={cl?"vis":"not"} onChange={onChange} value={value}/>
       <div className='day'>
        <div className='day1'><h4>Today</h4></div>
        <button className='allEvents' onClick={()=>{onMen(!men)}}>
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-menu-1439743-1214315.png' alt='err'/>
        </button>
       </div>
       <div className={men?"see":"in"}>
        {data.map((ele,i)=>(
          <p>{`${ele.event} - ${ele['start-time']} to ${ele['end-time']}`}</p>
        ))}
       </div>
       <Table/>
    </div>
  );
}

export default App;
