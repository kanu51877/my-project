import "./Add.css";
import axios from 'axios';
import React, {useState} from "react";
export function Add(){
    const[empNo,setEmpNo]=useState('');
     const[empName,setEmpName]=useState('');
      const[empSal,setEmpSal]=useState('');

    async function addHandler(e){
        e.preventDefault();
        try{
            const response = await axios.post('https://kanu-employee-record.onrender.com/api/employees', {empNo, empName, empSal});
            //alert(JSON.stringify(response.data,null,2));
            alert(response.data.message);
 
        }catch(error){
              alert(error);
        }
    }
    return(
        <div class="container"><br/>
            <h1>Employee Data</h1>
            <form>
            <div class="inputs">
            <input type="text" placeholder="enter No." value={empNo} onChange={(e)=>{setEmpNo(e.target.value)}}/>
            <input type="text" placeholder="enter name" value={empName} onChange={(e)=>{setEmpName(e.target.value)}}/>
            <input type="text" placeholder="enter salary" value={empSal} onChange={(e)=>{setEmpSal(e.target.value)}}/>
            
            
            <button onClick={addHandler}>Submit</button>
            </div>
            </form>
      
        </div>
    )
}
//export default Add
