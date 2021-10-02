import { useEffect, useState } from "react";
import Button from "../Button";
import './counter.css'
function Counter(props){
    const [value,updateValue] = useState(props.children);
    // useEffect(()=>{return ()=>updateValue(props.children);},[props.children]);
    const incr = ()=>{
        updateValue(value+1);
    }
    const decr = ()=>{
        updateValue(value-1);
    }
    const reset = ()=>{
        updateValue(0)
    }
    props.getResetFunc(reset);
    return (<>
    <div className='counter-card'>
    <div>
    <Button styling='counterButton' performOp={decr}>-</Button>
    {value}
    <Button styling='counterButton' performOp={incr}>+</Button>
    </div>
    <Button styling='counterButton' performOp={reset}>Reset</Button>
    </div>
    </>)
}
export default Counter;