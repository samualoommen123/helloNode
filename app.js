const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Changing it to local Message'))

app.listen(port, () => console.log(`Port modified to 80 !  ${port}!`))
