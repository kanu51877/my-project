require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//middleware
app.use(express.json());
app.use(cors());

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB connect');
    }catch(error){
         console.error('mongoDB connection failed: ', error);
         process.exit(1);
    }
}
connectDB();
//define mongoose schema and model
const employeeSchema = new mongoose.Schema(
    {
        empNo: {type: Number, require: true},
        empName: {type: String, require: true, unique: true},
        empSal: {type: Number, require: true}, 
    },
    {
        timestamp: false,
        versionKey: false
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

//post all employees
app.post('/api/employees', async (req,res) => {
    try{

        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        //res.status(201).json(savedEmployee);
        res.status(201).json({"message":"Employee Object Saved Successfully..."});

    }catch(error){
        res.status(400).json({message: error.message});
    }
});
/*app.listen(3001, () => {
    console.log(`server running`);
});*/

app.get('/api/employees', async (req,res)=>{
    const employees = await Employee.find();
    res.json(employees);
});

app.get('/api/employees/:id', async(req,res)=>{
    try{
        const employees = await Employee.findById(req.params.id);
        if(!employees){
            return res.status(404).json({message:'Employee not found'});
         }else{
             res.json(employees);
            }
    }catch(error){
       res.status(500).json({message: error.message});
    }
});

//delete employees by id
app.delete('/api/employees/:id', async(req,res) => {
    try{
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(!deletedEmployee){
            return res.status(404).json({message: 'Employee not found!!'});
        }else{
            res.json({message: 'Employee deleted successfully'});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

// Update employee by ID
app.put('/api/employees/:id', async (req, res) => {
     try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
                req.params.id,
                req.body,{ 
                new: true,  //Update ke baad updated document return kare.
                runValidators: true //Schema ke validation rules ko enforce kare 
                    //update ke waqt bhi
            });
    if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
    }else{//res.json(updatedEmployee);
        res.json({ message: 'Employee Updated successfully' });
     }
    } 
    catch (error){
        res.status(400).json({ message: error.message });
    }
});

app.listen(3001, () => {
    console.log(`server running`);
});