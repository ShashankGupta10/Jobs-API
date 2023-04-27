const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const register = async (req, res) =>{
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })

        res.status(200).json({msg: "User created"})

    } catch (error) {
        res.status(500).json({error: error})
    }
}

const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const loggedInUser = await User.findOne({email: email})

        if(loggedInUser){
            isMatch = await bcrypt.compare(password, loggedInUser.password)
            console.log(isMatch);
            console.log(loggedInUser)
    
            if(isMatch){
                const token = jwt.sign({loggedInUser}, secret )
                res.status(200).json({msg: "Logged in successfully", token})
            }
            else{
                res.status(400).json({msg: "Invalid password for the above username! Please enter a valid password"})
            }
        }
        else{
            res.status(404).json({msg: "No such user found in the database"})
        }
    } catch (error) {
        res.status(500).json({error: error})
        console.log(error)
    }   
}


module.exports = {
    register,
    login
}