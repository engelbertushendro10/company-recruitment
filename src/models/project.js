const db = require('../configs/db');
module.exports = {
    getProject: () => {

        //LEFT JOIN engineer ON engineer.id_engineer = project.id_engineer
        return new Promise((resolve, reject) => {
            db.query(`SELECT project.id_project, project.name_project, project.status, project.descs, company.id_company, company.name as company 
      FROM project
      JOIN company ON company.id_company = project.id_company`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err);
                }
            });
        });
    },
    //LEFT JOIN engineer ON engineer.id_engineer = project.id_engineer
    getCompanyProject: (id_user) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT project.id_project, project.name_project, project.status, project.descs,company.id_user, company.id_company, company.name as company 
      FROM project
      JOIN company ON company.id_company = project.id_company
      WHERE company.id_user=${id_user}`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err);
                }
            });
        });
    },

    addProject: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO project SET? `, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editProject: (name_project, status, id_company, descs, id_project) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE project SET name_project=?, status=?, descs =?, id_company=?, WHERE id_project = ?', [name_project, status, descs, id_company, id_project], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteProject: (id_project) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM project WHERE id_project = ?', id_project, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
};