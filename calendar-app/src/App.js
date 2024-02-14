import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { event } from './components/db';


function App() {

let date=Date().split(" ");
console.log(date);

  return (
    <div className="App">
      <div className='nav'>
      <div className='dateBox'>
        <h6 className='head'>CALENDAR</h6>
      <h5 className='date'>{`${date[0]},${date[2]} ${date[1]}`}</h5>
     </div> <button className='change'> <img className='expImg'
      src='https://www.svgrepo.com/show/432477/expand-more.svg' alt='none'/> </button> 
       </div>
       <div className='day'>
        <div className='day1'><h4>Today</h4></div>
       </div>
       <Table/>
    </div>
  );
}

export default App;
