import axios from 'axios';
import {useState} from 'react';
import './Find.css';

export function Find(){
    const[id,setId] = useState('');
    const[employee, setEmployee] = useState(null);

    async function getData(e){
        try{
           const response = await axios.get(`https://my-project-t2qd.onrender.com/api/employees/${id}`);
           setEmployee(response.data);
        }catch(err){
           setEmployee(null);
           alert("Employee Not Found: "+err);
        }
    };
    return(
        <div className='container-find '>
            <h1>Find Record By Id</h1>
            <hr/><br/>
            <input type="text" placeholder="Enter id..." value={id} onChange={e => setId(e.target.value)} required/>
            <br/><br/>
            <button onClick={getData}>Find</button><br/>
            {employee && (
                <div class="details">
                    <h4>Employee Details</h4>
                    <hr/>
                    <p>Emp No is : {employee.empNo}</p>
                    <p>Emp Name is : {employee.empName}</p>
                    <p>Emp Sal is : {employee.empSal}</p>
                </div>
            )}
        </div>
    )
}

//export default Find
