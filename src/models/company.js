const express = require('express')
const db = require('../configs/db');
module.exports = {
    getCompany: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM company', (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    getCompanyProfile: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM company', (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    getCompanyById: (id_company) => {
        return new Promise((resolve, reject) => {
            console.log(id_company, "ini id company di model")
            db.query(`SELECT * FROM company where id_user=${id_company}`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    addCompany: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO company SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editCompany: (data, id_company) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE company SET ? WHERE id_company = ?', [data, id_company], (err, response) => {
                console.log(data)
                if (!err) {
                    resolve(response)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCompany: (id_company) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM company WHERE id_company = ?', id_company, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
};