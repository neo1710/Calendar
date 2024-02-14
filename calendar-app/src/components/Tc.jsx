import "./table.css";


export const Tc=({time})=>{
let curTime=Date().split(" ")[4];

curTime=curTime.split(":");
console.log(curTime);
let right=time-12;
if(right<10){
    right="0"+right;
}

return (
  
     <div className="time">
        <h5>{`${time<=12?time:right}${time<=12?"AM":"PM"}`}</h5>
     </div>
    
)
}