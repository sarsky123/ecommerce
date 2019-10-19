const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./src/models')
const config = require('./src/config/config')
const path = require("path")


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/passport')
require('./src/routes')(app)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/public/index.html'));
    //__dirname : It will resolve to your project folder.
});
sequelize.sync({ force: false })
    .then(() => {
        app.listen(config.port, () => {
            console.log('Server running on port ' + config.port);
        })
    })