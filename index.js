const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
		var x, y, z
		x = 5
		y = 3 
		z = x + y


return res.send(`The value of z is ${z}`)	
} )

app.post('/', (req, res) => {
    let email = req.body.email
    
return res.send(`The email value is ${email}`)
})

app.post('/penjumlahan', (req, res) => {
	let x, y, z
	x = parseInt(req.body.x)
	y = parseInt(req.body.y)
	z = x+y
	return res.send(`jumlahnya adalah ${z}`)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})