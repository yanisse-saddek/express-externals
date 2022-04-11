var express = require('express');
var router = express.Router();
const axios = require('axios')

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/:offset/:limit', (req, res)=>{
    const limit = req.params.limit
    const offset = req.params.offset
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(result=>{
        res.json(result.data)
    })

})
router.get('/pokemon/:id', (req, res)=>{
    const id = req.params.id
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result=>{
        res.json(result.data)
    })
})
module.exports = router;
