const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''  
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log(err)
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({...user}, 'TzjJ5eOulKga', {
        expiresIn: "1 day"
      })
      const { name, email } = user
      res.json({ name, email, token })
    } else {
      return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
    }
  })
}