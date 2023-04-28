const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_SECRET

const authenticationMiddleware = async (req, res, next) =>{
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        if(token){
            const payload = jwt.verify(token, secret)
            req.user = {payload}
    next()
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = authenticationMiddleware