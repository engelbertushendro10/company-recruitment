const model = require('../models/HireModel')

const {
    statusGet,
    statusCreate,
    statusCreateFail,
    statusUpdate,
    statusUpdateFail,
    statusServerError,
    statusNotFound
} = require('../helpers/status')

module.exports = {
    getAllHireByEngineerId: (req, res) => {
        const id = req.params.id_engineer
        console.log(id)
        model
            .getAllHireByEngineerId(id)
            .then(data => {
                res.send({
                    status: 200,
                    message: 'Success get enghireineer',
                    data

                })
            })
            .catch(err => {
                console.log(err);
            });
    },

    getAllHireByProject: async(req, res, _next) => {
        const { pId } = req.params

        try {
            const result = await getAllHireByProjectModel(pId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            console.error(error)
            statusServerError(res)
        }
    },

    createHire: async(req, res, _next) => {
        const {
            e_id,
            p_id,
            c_id,
            hr_progres,
            hr_price,
            status,
            date_confirm,
        } = req.body
        const data = {
            e_id,
            p_id,
            c_id,
            hr_progres,
            hr_price,
            status,
            date_confirm,
        }

        console.log(data)
        model.createHireModel(data)
            .then(data => {
                res.send({
                    status: 200,
                    message: 'Success hire engineer',
                    data

                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    updateHireStatus: async(req, res, _next) => {
        try {
            const { hrId } = req.params
            const findData = await getHireByIdModel(hrId)

            if (findData.length) {
                const result = await updateHireStatusModel(hrId, req.body)

                if (result.affectedRows) {
                    statusUpdate(res)
                } else {
                    statusUpdateFail(res)
                }
            } else {
                statusNotFound(res)
            }
        } catch (err) {
            statusServerError(res)
        }
    }
}