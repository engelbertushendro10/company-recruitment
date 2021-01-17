const model = require('../models/company');
const form = require('../helpers/form');


module.exports = {
    getCompany: (_req, res) => {
        model
            .getCompany()
            .then(response => {
                //resolve
                form.success(res, response);
            })
            .catch(err => {
                //reject
                console.log(err);
            });
    },
    getCompanyProfile: (req, res) => {
        model
            .getCompany()
            .then(response => {
                //resolve
                // form.success (res, response);
                console.log(response)
                console.log(req.user)
                res.json(response.filter(response => response.id_user == req.user.id_user))
            })
            .catch(err => {
                reject
                //console.log(err);
            });
    },
    getCompanyById: (id, req, res) => {
        model.getCompanyById(id)
            .then(response => {
                res.json(response.filter(response => response.id_user == req.user.id_user))
            })
            .catch(err => {
                console.log(err)
            })
    },
    addCompany: (req, res) => {
        const id_user = req.user.id_user
        const { name, location, description } = req.body
        const data = {
            id_user: id_user,
            name: name,
            logo: req.file === undefined ? '' : req.file.filename,
            location: location,
            description: description,
        }
        console.log(data)
        model.addCompany(data)
            .then(result => {
                res.json(response.filter(response => response.id_user == req.user.id_user))
                form.success(res, result);
                res.json(result)
                res.json({
                    status: 200,
                    message: 'Success add company',
                    data

                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    editCompany: (req, res) => {
        const id_company = req.params.id_company
        const { name, no_hp, github, location, description } = req.body
        const data = {
            id_company,
            name,
            no_hp,
            github,
            image: req.file === undefined ? '' : req.file.filename,
            location,
            description,
        }

        model.editCompany(data, id_company)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // model.deleteCompany(id_company)
    // .then(result => {
    //     res.json(result)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
}