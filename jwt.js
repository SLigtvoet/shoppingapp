const jwt = require('jsonwebtoken');


// const secret = 'JWT_~secret*\\key'

const secret = process.env.JWT_SECRET || 'JWT_~secret*\\key'

function sign(userId) {
    return {id: jwt.sign({
      "data": {
        "id": userId
      }
    }, secret, { expiresIn: '3h' })}
   }

function verify(token, callback) {
    jwt.verify(token, secret, callback)
  }

module.exports = { sign, verify }