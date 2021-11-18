const User = require('../model/users')

exports.create = (req,res,next) => {
   let user = new User({
    name: req.body.name,
    userName: req.body.userName,
    identification: req.body.identification,
    password: req.body.password,
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