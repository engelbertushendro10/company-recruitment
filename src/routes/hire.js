const express = require('express')
const router = express.Router()
const { checkToken } = require('../helpers/auth')


const {
    createHire,
    getAllHireByEngineerId,
    getAllHireByProject,
    updateHireStatus
} = require('../controllers/hireController.js')

router.post('/', checkToken, createHire)
router.get('/enginer/:id_engineer', checkToken, getAllHireByEngineerId)
router.get('/project/:pId', checkToken, getAllHireByProject)
router.put('/:hrId', checkToken, updateHireStatus)

module.exports = router