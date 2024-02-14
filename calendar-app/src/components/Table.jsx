import { Tc } from "./Tc";
import "./table.css";

export const Table=()=>{
let box=new Array(24).fill(0);
    return (
        <div className="table">
        {
        box.map((ele,i)=>(
        <Tc key={i} time={i+1}/>
        ))}
        </div>
    )
}