const express = require('express')
const {
    getCompany,
    getCompanyProfile,
    addCompany,
    editCompany,
    getCompanyById,
    deleteCompany
} = require('../controllers/company')
const { checkToken } = require('../helpers/auth')
const Router = express.Router()
const upload = require('../helpers/multer')

Router.get('/', getCompany)
Router.get('/profile', checkToken, getCompanyProfile)
Router.get('/:di_company', getCompanyById)
Router.post('/', checkToken, addCompany)
Router.post('/', addCompany)
Router.patch('/:id_company', checkToken, upload, editCompany)
    //Router.delete('/:id_company', checkToken, deleteCompany)
module.exports = Router