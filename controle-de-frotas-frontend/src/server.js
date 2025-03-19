const express = require('')
const app = express()
const routes = require('./routes')
// 📌 Utilizando template engine
const nunjucks = require("")

const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0'

app.use(routes)

app.use(express.static(""))  	
app.use(express.static(''))

nunjucks.configure("src/views/", {
	// "ligando" nunjucks ao express
	express: app,
	noCache: true
})

app.listen(PORT, () =>{
	console.log(`Aplicação rodando na porta ${PORT}\n 👉 http://${HOST}:${PORT}`)
})
