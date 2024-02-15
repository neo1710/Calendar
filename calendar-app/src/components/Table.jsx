import { Tc } from "./Tc";
import { event } from "./db";
import "./table.css";

export const Table=({events})=>{
let box=new Array(24).fill(0);
let p=0;
box=box.map((ele,u)=>{
    if(events[p]!==undefined&&events[p]["start-time"]==u){
        
      return events[p++]["event"]  
    }else{
        return null;
    }
})
console.log(box);
console.log(events)
    return (
        <div className="table">
        <div className="box">  {
        box.map((ele,i)=>(
        <Tc key={i} time={i<10?`0${i}`:i}/>
        ))}
        </div>
         <div className="timeline">
         {
        box.map((ele,i)=>(
        <div>{events.length!==0&&ele!==null?<h3>{ele}</h3>:""}</div>
        ))}
       </div>
        </div>
    )
}