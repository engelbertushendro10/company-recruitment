// const multer = require('multer')
// const path = require("path");
// const storage = multer.diskStorage({
//     destination: (_req, _file, callback) => {
//         callback(null, './uploads/')
//     },
//     filename: (_req, file, callback) => {
//         const extension = file.originalname.split('.').pop()
//         const fileName = file.fieldname + '-' + Date.now() + '.' + extension
//         callback(null, fileName)
//     }
// })
// const fileFilter = (_request, file, callback) => {
//     if ((file.mimetype === 'image/jpeg') || (file.mimetype === 'image/png')) {
//         callback(null, true)
//     } else {
//         return callback(new Error('Extension file must be JPG or PNG'), false)
//     }
// }

// const limits = { fileSize: 1024 * 1024 * 1 }

// const upload = multer({ storage, fileFilter, limits }).single('image')

// const uploadFilter = (request, response, next) => {
//     upload(request, response, function(err) {
//         if (err instanceof multer.MulterError) {
//             response.status(400).send({
//                 success: false,
//                 message: err.message
//             })
//         } else if (err) {
//             response.status(400).send({
//                 success: false,
//                 message: err.message
//             })
//         }
//         next()
//     })
// }

// module.exports = uploadFilter


const multer = require('multer')

const {
    statusEror
} = require('../helpers/status')

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, './uploads/')
    },
    filename: (_req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const fileName = 'img_' + Date.now() + '.' + ext

        cb(null, fileName)
    }
})

const fileFilter = (_req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        return cb(new Error('Extension file must be JPG or PNG'), false)
    }
}

const limits = {
    fileSize: 1024 * 1024 * 1
}

const upload = multer({ storage, fileFilter, limits }).single('image')

const uploadFilter = (req, res, next) => {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            statusEror(res, err)
        } else {
            console.log('Success upload image')
        }

        next()
    })
}

module.exports = uploadFilter