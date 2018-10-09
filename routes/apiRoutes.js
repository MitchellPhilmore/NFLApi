let roster = require('../roster.js')

module.exports = (app)=>{

app.get('/api/roster',(request,response)=>{
	response.json(roster)
})


app.post('/api/roster',(request,response)=>{
	roster.push(request.body)
})


}

