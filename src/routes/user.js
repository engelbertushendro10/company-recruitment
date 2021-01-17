const express = require('express')
const Router = express.Router()
const { checkToken } = require('../helpers/auth')
const {
    getUser,
    userCompany,
    userEngineer,
    getProfile,
    addUser,
    editUser,
    deleteUser,
    loginUser,
} = require('../controllers/user')


Router.get('/', checkToken, getUser)
Router.get('/company', checkToken, userCompany)
Router.get('/engineer', checkToken, userEngineer)
Router.get('/profile', checkToken, getProfile)
Router.post('/', addUser)
Router.patch('/:id_user', checkToken, editUser)
Router.delete('/:id_user', checkToken, deleteUser)
Router.post('/login', loginUser)

module.exports = Router