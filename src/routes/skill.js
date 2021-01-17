const express = require('express')
const Router = express.Router()
const { checkToken } = require('../helpers/auth')
const {
    getSkill,
    getSkillById,
    addSkill,
    editSkill,
    deleteSkill
} = require('../controllers/skill')


Router.get('/', checkToken, getSkill)
Router.get('/engineer/:id_engineer', checkToken, getSkillById)
Router.post('/:id_engineer', checkToken, addSkill)
Router.patch('/:id_skill', checkToken, editSkill)
Router.delete('/:id_skill', checkToken, deleteSkill)


module.exports = Router