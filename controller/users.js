const User = require('../model/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.create = async (req,res,next) => {

    const userExist = await User.findOne({userName: req.body.userName});

    if(userExist){
        return res.status("400").send("User exists");
    }

    let encryptedPassword = await bcrypt.hash(req.body.password, 10);

   let user = new User({
    name: req.body.name,
    userName: req.body.userName,
    identification: req.body.identification,
    password: encryptedPassword,
    photo: req.body.photo,
    active: req.body.active,
   })

   user.save(err =>{
       if(err)
        return next(err)

       res.send("User created successfully") 
   })
}

exports.index = (req, res, next) =>{

    User.find({},(err,users) => {
        if(err)
            return next(err)
        res.send(users)
    })
}

exports.show = (req, res, next) =>{

    User.findById(req.params.id,(err,user) => {
        if(err)
            return next(err)
        res.send(user)
    })
}

exports.update = (req, res, next) =>{

    User.findByIdAndUpdate(req.params.id,{$set: req.body},(err,user) => {
        if(err)
            return next(err)
        res.send("User updated successfully")
    })
}

exports.delete = (req, res, next) =>{

    User.findByIdAndRemove(req.params.id,(err,user) => {
        if(err)
            return next(err)
        res.send("User deleted successfully")
    })
}

exports.login = async (req, res, next) =>{

    const {userName, password} = req.body 

    if(!userName || !password){
        res.status("400").send("Inputs are required")
    }

    const currentUser = await User.findOne({userName});

        if(currentUser && await bcrypt.compare(password, currentUser.password)){     
            const token = jwt.sign( {user_id: currentUser._id, userName}, "tokensecreto123456", {expiresIn: "2D"} );
            currentUser.token = token;
            res.status(200).json(currentUser);
        }else{
            /*console.log(currentUser.userName)
            console.log(currentUser.password)
            console.log(passwordCurrentUser)*/
            res.status(400).send("Invalid credentials");
        }
}