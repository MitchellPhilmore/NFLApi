let path = require('path'),
bodyParser = require('body-parser'),
express = require('express'),
roster = require('./roster.js')

let port = 3000
let app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

require('./routes/htmlRoutes')(app)
require('./routes/apiRoutes')(app)



app.listen(port,()=>console.log(`Server is running on port ${port}`))
