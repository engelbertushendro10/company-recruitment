const express = require('express')
const Router = express.Router()
const { checkToken } = require('../helpers/auth')
const {
    getProject,
    getCompanyProject,
    addProject,
    editProject,
    deleteProject,
} = require('../controllers/project')

Router.get('/', checkToken, getProject)
Router.get('/mycompany', checkToken, getCompanyProject)
Router.post('/', checkToken, addProject)
Router.patch('/:id_project', checkToken, editProject)
Router.delete('/:id_project', checkToken, deleteProject)

module.exports = Router