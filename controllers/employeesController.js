const Employee = require("../model/Employee")
const getAllemployees=async(req,res)=>{
   const employees=await Employee.find()
   if(!employees)return res.status(204).json({"message":"no emloyee found on db"})
    res.json(employees)
}
const createNewEmployye=(req,res)=>{
    const newEmloyee={
        // id:data.employees?.length?data.employees[data.employees.length-1].id+1:1,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }
    if(!newEmloyee.firstname||!newEmloyee.lastname){
        return res.status(400).json({'message':"firstname and lastname are required"})
    }
   Employee.create(newEmloyee)
    res.status(201).json(data.employees)

}
const updateEmployye=(req,res)=>{
    const employee=data.employees.find(emp=>emp.id===parseInt(req.body.id))
    if(!employee){
        return res.status(400).json({"message":`employee id ${req.body.id} not found`})
    }
    if(req.body.firstname)employee.firstname=req.body.firstname
    if(req.body.lastname)employee.lastname=req.body.lastname
    const filteredArray=data.employees.filter(emp=>emp.id !==parseInt(req.body.id))
    const unsortedArray=[...filteredArray,employee]
    data.setEmployyes(unsortedArray.sort((a,b)=>a.id>b.id?1:a.id<b.id?-1:0))
    res.json(data.employees)
}
const deleteEmployee=(req,res)=>{
    const employee=data.employees.find(emp=>emp.id===parseInt(req.body.id))
    if(!employee){
        return res.status(400).json({"message":`Employee ID ${req.body.id} not found` })
    }
    const filteredArray=data.employees.filter(emp=>emp.id!==parseInt(req.body.id))
    data.setEmployyes([...filteredArray])
    res.json(data.employees)
}
const getEmployee=(req,res)=>{
    const employee=data.employees.find(emp=>emp.id===parseInt(req.body.id))
    if(!employee){
        return res. status(400).json({"message":`Employee ID ${req.params.id} not found` })
    }
    res.json(employee)
}
module.exports={
    getAllemployees,
    createNewEmployye,
    updateEmployye,
    deleteEmployee,
    getEmployee
}