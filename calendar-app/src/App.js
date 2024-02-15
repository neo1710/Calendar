import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { event } from './components/db';
import Calendar from "react-calendar"
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import TwentyFourHourGraph from './components/Tfh';

function App() {
let [value,onChange]=useState(Date());
let [cl,onCl]=useState(false);
let [men,onMen]=useState(false);
let [date,onD]=useState(Date().split(" "));
console.log(date,value);
let data=event.filter((ele,i)=>{
  if(ele.date==date[2]&&ele.month==date[1]){
    return true
  }else{
    return false;
  }
})

function changes(newDate){
onChange(newDate);
newDate=newDate.toString();
onD(newDate.split(" "))
}
console.log(data);


  return (
    <div className="App">
      <div className='nav'>
      <div className='dateBox'>
        
        <h6 className='head'>CALENDAR</h6>
      <h4 className='date'>{`${date[0]},${date[2]} ${date[1]}`}</h4>
     </div> <button className='change' onClick={()=>{onCl(!cl)}}> <img className='expImg'
      src='https://www.svgrepo.com/show/432477/expand-more.svg' alt='none'/> </button> 
       </div>
       <Calendar onClickDay={(value, event) => changes(value)}
       onActiveStartDateChange={({ action, activeStartDate, value, view }) =>{changes(activeStartDate)} }
       className={cl?"vis":"not"} onChange={onChange} value={value}/>
       <div className='day'>
        <div className='day1'><h4>Today</h4></div>
        <button className='allEvents' onClick={()=>{onMen(!men)}}>
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-menu-1439743-1214315.png' alt='err'/>
        </button>
       </div>
       <div className={men?"see":"in"}>
        {data.length!==0?data.map((ele,i)=>(
          <p>{`${ele.event}`}</p>
        )):<p>No events today</p>}
       </div>
       <Table events={data}/>
    </div>
  );
}

export default App;
