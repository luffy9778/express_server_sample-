const express=require("express")
const router=express.Router()
const employeesController=require('../../controllers/employeesController')

router.route("/")
.get(employeesController.getAllemployees)
.post(employeesController.createNewEmployye)
.delete(employeesController.deleteEmployee)
.put(employeesController.updateEmployye)
router.route("/:id")
.get(employeesController.getEmployee)
module.exports=router