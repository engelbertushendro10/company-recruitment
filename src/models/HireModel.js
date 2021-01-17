const dbConnect = require('../configs/db')
const { formatDate } = require('../helpers/date')

module.exports = {
    createHireModel: (data) => {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO hire
                SET ?
      `
            dbConnect.query(query, data, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },
    getAllHireByEngineerId: (e_id) => {
        //const enid = 64
        return new Promise((resolve, reject) => {

            dbConnect.query(`SELECT * FROM hire where e_id= ${e_id}`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    getAllHireByProjectModel: (pId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM hire hr
          JOIN project p
            ON (p.id_project = hr.p_id)
         WHERE p.id_project = ?
      `
            dbConnect.query(query, pId, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getHireByIdModel: (hrId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM hire
         WHERE ?
      `

            dbConnect.query(query, { hr_id: hrId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updateHireStatusModel: (hrId, data) => {
        return new Promise((resolve, reject) => {
            const date = new Date()

            data = {
                hr_date_confirm: formatDate(date)
            }

            const query = `
        UPDATE hire
           SET ?
         WHERE hr_id = ${hrId}
      `

            dbConnect.query(query, data, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    }
}