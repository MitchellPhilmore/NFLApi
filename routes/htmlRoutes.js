let path = require('path'),
   roster = require('../roster.js')


module.exports = (app)=>{

	app.get('/',(request,response)=>{
response.sendFile(path.join(__dirname,'../public/home.html'))

app.get('/addplayer',(request,response)=>{
	response.sendFile(path.join(__dirname,'../public/addplayer.html'))
})

app.get('/roster',(request,response)=>{
	response.sendFile(path.join(__dirname,'../public/roster.html'))
})

app.get('/dropplayer',(request,response)=>{
	response.sendFile(path.join(__dirname,'../public/dropPlayer.html'))
})




})

}