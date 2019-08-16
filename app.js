const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Changing it to local Message'))

app.listen(port, () => console.log(`Test message !  ${port}!`))
