const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.headers.authorization

    if(!token){
        return res.status(403).send("Forbidden my dog");
    }

    try{
        token = token.substring(7, token.length);
        const decode = jwt.verify(token, "tokensecreto123456");
        req.user = decode;
    }catch(err){
        return res.status(403).send("Invalid token");
    }
    return next();
}

module.exports = verifyToken