import {NavLink, Route, Routes} from "react-router-dom";
import {Add} from "./Component/Add";
import {Find} from "./Component/Find";
import {Delete} from "./Component/Delete";
import {Info} from "./Component/Info";
import {Update} from "./Component/Update"
import './Home.css';

function Home(){
    return(
        <div>
            <h1>Employees Record</h1>
            <hr/>
            <nav >
            
            <NavLink to={"/Add"}>Add</NavLink>
            <NavLink to={"/Delete"}>Delete</NavLink>
            <NavLink to={"/Find"}>Find</NavLink>
            <NavLink to={"/Info"}>Find All</NavLink>
            <NavLink to={"/Update"}>Update</NavLink>
            </nav>
         <hr/>
          <br/>
        <Routes>
            
            <Route path='/Add' element={<Add/>}/>
            <Route path='/Delete' element={<Delete/>}/>
            <Route path='/Find' element={<Find/>}/>
            <Route path='/Info' element={<Info/>}/>
            <Route path='/Update' element={<Update/>}/>
            
         </Routes>
        </div>
    )
}

export default Home;