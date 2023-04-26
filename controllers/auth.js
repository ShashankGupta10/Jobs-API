const register = (req, res) =>{
    res.send('register')
}

const login = (req, res) =>{
    res.send('Login')
}


module.exports = {
    register,
    login
}