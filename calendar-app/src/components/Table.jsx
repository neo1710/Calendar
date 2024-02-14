import { Tc } from "./Tc";
import "./table.css";

export const Table=()=>{
let box=new Array(24).fill(0);
    return (
        <div className="table">
        <div className="box">  {
        box.map((ele,i)=>(
        <Tc key={i} time={i<10?`0${i}`:i}/>
        ))}
        </div>
         <div className="timeline">
       
       </div>
        </div>
    )
}