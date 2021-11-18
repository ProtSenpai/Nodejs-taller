const Note = require('../model/notes')


exports.create = async (req,res,next) => {
    
   let note = new Note({
    tittle: req.body.tittle,
    comment: req.body.comment,
    user: currentUser.userName

   })

   note.save(err =>{
       if(err)
        return next(err)

       res.send("Note created successfully") 
   })
}

exports.index = async (req, res, next) =>{

    Note.find({username: req.user.username},(err,notes) => {
        if(err)
            return next(err) 
        
        const notesU = []
        notes.map((object) =>{
            if(object.user === currentUser.userName){
                notesU.push(object)
            }
        })    
        res.send(notesU)
    })
}

exports.show = (req, res, next) =>{

    Note.findById(req.params.id,(err,note) => {
        if(err)
            return next(err)
        if(req.user.username == note.username){
            res.send(note)
        }else{
            return res.status(401).send("you can't do that!")
        }
    })
}

exports.update = (req, res, next) =>{

    Note.findByIdAndUpdate(req.params.id,{$set: req.body},(err,note) => {
        if(err)
            return next(err)
        res.send("Note updated successfully")
    })
}

exports.delete = (req, res, next) =>{

    Note.findByIdAndRemove(req.params.id,(err,note) => {
        if(err)
            return next(err)
        res.send("Note deleted successfully")
    })
}