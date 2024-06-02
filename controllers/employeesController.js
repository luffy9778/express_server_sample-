const Employee = require("../model/Employee")
const getAllemployees=async(req,res)=>{
   const employees=await Employee.find()
   if(!employees)return res.status(204).json({"message":"no emloyee found on db"})
    res.json(employees)
}
const createNewEmployye=async(req,res)=>{
    if(!req?.body?.firstname||!req?.body?.lastname){
        return res.status(400).json({'message':"firstname and lastname are required"})
    }
    try {
        const result=await Employee.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname
        })
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}
const updateEmployye=async(req,res)=>{
    if(!req?.body?.id){
        return res.status(400).json({"message":"id is required"})
    }
    const employee=await Employee.findOne({_id:req.body.id}).exec()
    if(!employee){
        return res.status(400).json({"message":`no employee match this id ${req.body.id} not found`})
    }
    if(req.body?.firstname)employee.firstname=req.body.firstname
    if(req.body?.lastname)employee.lastname=req.body.lastname
    const result=await employee.save()
    res.json(result)
}
const deleteEmployee=async (req,res)=>{
    if(res?.body?.id){
        return res.status(400).json({"message":"id is required"})
    }
    const employee=await Employee.findOne({_id:req.body.id}).exec()
    if(!employee){
        return res.status(400).json({"message":` no Employee match with this ID ${req.body.id} not found` })
    }
    const result=await employee.deleteOne()
    res.json(result)
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