var express = require('express');
var router = express.Router();
const axios = require('axios')

var json = require('./data.json');
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/game-of-thrones/json', (req, res)=>{
    res.json(json)
})
router.get('/game-of-thrones/url', (req, res)=>{
    axios.get('https://thronesapi.com/api/v2/Characters').then(result=>{
        res.json(result.data)
    })
})
module.exports = router;
