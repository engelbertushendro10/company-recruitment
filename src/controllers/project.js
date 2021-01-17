const model = require('../models/project');
const form = require('../helpers/form');

module.exports = {
    getProject: (_, res) => {
        model
            .getProject()
            .then(response => {
                form.success(res, response);
            })
            .catch(err => {
                //reject
                console.log(err);
            });
    },
    getCompanyProject: (req, res) => {
        const id_user = req.user.id_user
            //console.log(id_user, "ini d user")
        model
            .getCompanyProject(id_user)
            .then(response => {
                //resolve
                form.success(res, response);
            })
            .catch(err => {
                //reject
                console.log(err);
            });
    },
    addProject: (req, res, response) => {
        const {
            name_project,
            status,
            id_company,
            descs
        } = req.body
        const data = {
            name_project: name_project,
            status: status,
            id_company: id_company,
            descs: descs
        }

        model.addProject(data)
            .then(data => {
                console.log(data)
                    // res.json({
                    //     status: 200,
                    //     message: 'Success registering new user',
                    //     data

                // })
                form.success(res, response);
            })
            .catch(err => {
                console.log(err)
            })
    },
    editProject: (req, res) => {
        const id_project = req.params.id_project
        const name_project = req.body.name_project
        const status = req.body.status
        const id_company = req.body.id_company
        const descs = req.body.descs
            //const id_engineer = req.body.id_engineer

        model.editProject(name_project, status, id_company, descs, id_project)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteProject: (req, res, response) => {
        const id_project = req.params.id_project

        model.deleteProject(id_project)
            .then(result => {
                console.log(result)
                form.success(res, response)
            })
            .catch(err => {
                console.log(err)
            })
    }
};