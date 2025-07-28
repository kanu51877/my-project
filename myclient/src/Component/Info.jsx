import "./Info.css";
import axios from 'axios';
import React, {useState} from 'react';
export function Info(){
    const [employees, setEmployees] = useState([]);

    async function handleViewClick(e){
        e.preventDefault();
        try{
            const response = await axios.get('https://kanu-employee-record.onrender.com/api/employees');
            setEmployees(response.data);
        }catch(error){
              alert(error);
        }
     };
    return(
        <div class="container-info">
            <h1>Employees Records</h1>
            <hr/>
            <form onSubmit={handleViewClick}>
            <button type="submit">VIEW</button>
            </form>
            <div class="box">
                <table border="1">
                    <thead>
                        <th>Id</th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </thead>
                    <tbody>
                        {
                            employees.length > 0 ?(
                                employees.map(emp => (
                                    <tr>
                                        <td>{emp._id}</td>
                                        <td>{emp.empNo}</td>
                                        <td>{emp.empName}</td>
                                        <td>{emp.empSal}</td>
                                    </tr>
                                ))
                            ): <tr><td colspan={'4'}>No Record</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
//export default Info 
