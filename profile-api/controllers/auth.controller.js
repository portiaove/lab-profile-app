const createError = require('http-errors');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.authenticate = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.logout = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.getProfile = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.editProfile = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}
