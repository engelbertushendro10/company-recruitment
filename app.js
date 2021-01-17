require('dotenv/config')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()
    //const port = process.env.PORT

//const express = require('express')
const engineer = require('./src/routes/engineer')
const company = require('./src/routes/company')
const user = require('./src/routes/user')
const project = require('./src/routes/project')
const skill = require('./src/routes/skill')
const hire = require('./src/routes/hire')
const register = require('./src/controllers/user')
const skills = require('./src/controllers/skill')
const showcase = require('./src/controllers/showcase')


app.use(morgan('dev'))
app.use(helmet.xssFilter())
app.use(cors()) //manage cors, menentukan situs mana yang boleh akses, situs yang mana yang di blacklist
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    //var upload = multer({ dest: './uploads' })
app.use('/image', express.static('uploads'))

//app.use('/', router) // localhost:3000/
app.get('/', (_request, response) => {
    response.send('e-recruitment web service')
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authoization'
    )
    next()
})

app.use('/engineer', engineer) // localhost:3000/engineer
app.use('/company', company)
app.use('/project', project)
app.use('/hire', hire)
app.use('/user', user)
app.use('/register', register.addUser) //.addUser
app.use('/skill', skill)
app.use('/skills', skills.getSkill) //.getAllSkills
app.use('/showcase', showcase.getAllShowcase) //.getAllShowcase

app.listen(4000, () => {
    console.log('Server is Running')
})

//module.exports = app