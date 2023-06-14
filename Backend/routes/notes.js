const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
 console.log(res.body)
    res.send(res.body)
} )

module.exports = router