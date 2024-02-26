import {useState,useEffect} from 'react';


const ProgressBar =({value=0}) =>{
    const [percent,setPercent]=useState(value);

    useEffect(() =>{
       setPercent(Math.min(100,Math.max(value,0)));
    
    })


    return (
    <div className='progress'>
     <span>{percent.toFixed()}%</span>
     <div style={{width:`${percent}%`}}/>
      </div>
     )
}

export default ProgressBar;