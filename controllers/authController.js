const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');
const handelLogin=async(req,res)=>{
    const{user,pwd}=req.body
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const founder=usersDB.users.find(p=>p.username===user)
    if(!founder) return res.sendStatus(401); 
    const match=await bcrypt.compare(pwd,founder.password)
    if (match) {
        // create JWTs
        res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}
module.exports={handelLogin}