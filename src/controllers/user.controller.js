const Users = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(req.body.password, salt, (err, hash) => {
      const { email, password } = req.body;
      try {
        let newUser = Users.create({
          email: email,
          password: hash
        }).then(result => {
          res.status(201).json({
            message: 'User created succesfully'
          });
        });
      } catch (e){
        console.log(e);
        res.status(500).json({
          message: 'Something went wrong!',
          data: {}
        });
      }
    });
  });
}

function login(req, res) {
  Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(user === null) {
      res.status(401).json({
        message: 'Invalid credentials!'
      });
    } else {
        bcryptjs.compare(req.body.password, user.password, function(err, result) {
          if(result){
            const token = jwt.sign({
              email: user.email,
              userId: user.id
            }, 'secret', function(err, token){
              res.status(200).json({
                message: 'Authentication succesfully',
                token: token
              });
            });
          } else {
            res.status(500).json({
              message: 'Something went wrong!',
              data: {}
            });
          }
        })
      }
    }
  )
}

module.exports = {
    signUp: signUp,
    login: login
}
