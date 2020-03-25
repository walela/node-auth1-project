const db = require('../database/dbConfig.js')

function find() {
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter)
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids
      return findById(id)
    })
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
}
module.exports = {
  add,
  find,
  findBy,
  findById
}
