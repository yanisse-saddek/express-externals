const axios = require('axios');
const express = require('express')
const app = express()

app.use(require('./gameofthrone.js'))
app.use(require('./pokeprout.js'))

app.listen(3000)