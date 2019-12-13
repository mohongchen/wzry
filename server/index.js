const express = require("express")

const app = express()

app.set('secret','fangdaohuanjingbianlianglimianqu')

app.use(require('cors')())
app.use(express.json())

app.use('/uploads',express.static(__dirname+'/uploads'))

require('./plugins/db')(app)
require('./route/admin')(app)
require('./route/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});