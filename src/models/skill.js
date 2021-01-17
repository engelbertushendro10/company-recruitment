const db = require('../configs/db');
module.exports = {
    getSkill: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM skill', (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    getSkillById: (id_engineer) => {
        return new Promise((resolve, reject) => {
            console.log(id_engineer, "ini id engineer di skill")
            db.query(`SELECT * FROM skill where id_engineer=${id_engineer}`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    addSkill: (id_engineer, skill_name) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO skill (id_engineer, skill_name)
  VALUES (?, ?)`, [id_engineer, skill_name], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editSkill: (skill_name, id_skill) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE skill SET skill_name = ? WHERE id_skill = ?', [skill_name, id_skill], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteSkill: (id_skill) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM skill WHERE id_skill = ?', id_skill, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
};