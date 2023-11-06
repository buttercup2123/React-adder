import React from "react"
import {useState} from "react"
function Adder(){
    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    const[result,setResult]=useState(0)

    function fun(){
        setResult(num1+num2)
    };
   
    return(
        <div>
            <forms>
                <label for="num1">Enter num1</label>
                <input type="text" placeholder="num1"
                value={num1}onChange={(e)=>setNum1(Number(e.target.value))}></input>
            
                <label for="num2">Enter num1</label>
                <input type="text" placeholder="num2"
                value={num2}onChange={(e)=>setNum2(Number(e.target.value))}></input>
            </forms>
            <button type="submit" onClick={fun} >Add</button>
            <h3>{result}</h3>
        </div>
    )
}
export default Adder;