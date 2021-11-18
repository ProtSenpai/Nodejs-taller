const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.headers.authorization

    if(!token){
        return res.status(403).send("Forbidden");
    }

    try{
        token = token.substring(7, token.length);
        console.log(token);
        const decode = jwt.verify(token, process.env.TOKENSECRET);
        req.user = decode;
    }catch(err){
        return res.status(403).send("Invalid token");
    }
    console.log(token);

    return next();
}

module.exports = verifyToken