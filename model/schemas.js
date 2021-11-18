const joi = require('joi');

const schemas = {

    user: joi.object().keys({
        firstname: joi.string().alphanum().min(3).max(20).required(),
        lastname: joi.string().alphanum().min(3).max(20).required(),
        username: joi.string().alphanum().min(3).max(20).required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
        photo: joi.string().alphanum().required(),
        token: [joi.string(), joi.number()]
    }),

    post: joi.object().keys({
        title: joi.string().alphanum().min(3).max(50).required(),
        comment: joi.string().alphanum().required(),
    })

}

module.exports = schemas;