const db = require('../database/db-config.js')

function find() {
  return db('users')
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids
      return findById(id)
    })
}

function findBy(filter) {
  return db('users').where(filter)
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
