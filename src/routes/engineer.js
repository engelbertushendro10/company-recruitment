const express = require('express')
const {
    getEngineer,
    getEngineerProfile,
    getEngineerById,
    addEngineer,
    editEngineer,
    deleteEngineer,
    //searchEngineer
} = require('../controllers/engineer')
const {
    getSkills,
    addSkills,
    editSkills,
    deleteSkills
} = require('../controllers/skills')
const {
    getShowcase,
    addShowcase,
    editShowcase,
    deleteShowcase,
} = require('../controllers/showcase')
const { checkToken } = require('../helpers/auth')
const Router = express.Router()
const upload = require('../helpers/multer')

Router.get('/', checkToken, getEngineer)
Router.get('/profile', checkToken, getEngineerProfile)
Router.get('/:id_engineer', checkToken, getEngineerById)
Router.post('/', checkToken, upload, addEngineer)
Router.patch('/:id_engineer', checkToken, upload, editEngineer)
Router.delete('/:id_engineer', checkToken, deleteEngineer)
    // get('/filter', checkToken, searchEngineer)

// skills
Router.get('/:id_engineer/skills', checkToken, getSkills)
Router.post('/:id_engineer/skills', checkToken, addSkills)
Router.patch('/:id_engineer/skills/:id_skills', checkToken, editSkills)
Router.delete('/:id_engineer/skills/:id_skills', checkToken, deleteSkills)

// showcase
Router.get('/:id_engineer/showcase', checkToken, getShowcase)
Router.post('/:id_engineer/showcase', checkToken, addShowcase)
Router.patch('/:id_engineer/showcase/:id_showcase', checkToken, editShowcase)
Router.delete('/:id_engineer/showcase/:id_showcase', checkToken, deleteShowcase)

module.exports = Router