const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
        let Token = req.headers['token-key'];
        jwt.verify(Token, "SecretKey123456789", ( err, decoded)=>{
                if(err){
                        res.status(401).json({status:"unauthorized"})
                }
                else{
                        // Get User Name From Decoded Token and add with Request Header
                        let username = decoded['data']['UserName']
                        req.headers.username = username ;
                        next()
                }
        })
}