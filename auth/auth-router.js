const bcrypt = require('bcryptjs')
const router = require('express').Router()
const Users = require('../users/users-model.js')

router.post('/register', (req, res) => {
  const { username, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 10)
  Users.add({
    username,
    password: hashedPassword
  })
    .then(data => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Error registering user.` })
    })
})
