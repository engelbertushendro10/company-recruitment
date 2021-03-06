const db = require('../configs/db');

const { addCompany } = require('./company')
const { addEngineer } = require('./engineer')

module.exports = {
    getUser: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * from user`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    userCompany: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT user.id_user, user.email, user.password, company.id_company, company.name
      FROM user
      JOIN company ON user.id_user = company.id_user`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    userEngineer: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT user.id_user, user.email, user.password, engineer.id_engineer, engineer.name
      FROM user
      JOIN engineer ON user.id_user = engineer.id_user`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    getProfile: () => {
        // return new Promise ((resolve, reject) => {
        //   db.query (`SELECT user.id_user, user.email, user.password, user.role, engineer.name, engineer.description, engineer.location
        //   FROM user
        //   JOIN engineer
        //   ON user.id_user=engineer.id_user
        //   UNION ALL
        //   SELECT user.id_user, user.email, user.password, user.role, company.name, company.description, company.location
        //   FROM user
        //   JOIN company
        //   ON user.id_user=company.id_user
        //   ORDER BY id_user`, (err, response) => {
        //     if (!err) {
        //       resolve (response);
        //     } else {
        //       reject (err);
        //     }
        //   });
        // });
        //
        return new Promise((resolve, reject) => {
            db.query(`SELECT * from user`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    addUser: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO user SET ?', data, (err, res) => {
                if (!err) {
                    if (parseInt(data.role) == 1) {
                        addEngineer({ id_user: res.insertId })
                    } else if (parseInt(data.role) == 2) {
                        addCompany({
                            id_user: res.insertId,
                            // cn_company: data.cn_company,
                            // cn_position: data.cn_position
                        })
                    }
                    resolve(res)
                } else {
                    reject(err)
                }

                // if (!err) {
                //     resolve(result)
                // } else {
                //     reject(new Error(err))
                // }
            })
        })
    },
    editUser: (data, id_user) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE user SET ? WHERE id_user = ?', [data, id_user], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteUser: (id_user) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM user WHERE id_user = ?', id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    emailCheck: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT email FROM user WHERE email = ? ', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    loginUser: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE email = ? ', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
};