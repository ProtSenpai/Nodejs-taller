const Note = require('../model/notes')

exports.create = (req,res,next) => {
   let note = new Note({
    tittle: req.body.tittle,
    comment: req.body.comment

   })

   note.save(err =>{
       if(err)
        return next(err)

       res.send("Note created successfully") 
   })
}

exports.index = (req, res, next) =>{

    Note.find({},(err,notes) => {
        if(err)
            return next(err)
        res.send(notes)
    })
}

exports.show = (req, res, next) =>{

    Note.findById(req.params.id,(err,note) => {
        if(err)
            return next(err)
        res.send(note)
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