const joi = require('joi');

const validate = (schema) => {
    return (req, res, next) => {
        const { error } = joi.any().validate(req.body.schema);
        const valid = error === null;

        if(valid){
            next();
        }else{
            console.log('error', error);
            res.status(422).send({error: error})
        }
    }
}

module.exports = validate;