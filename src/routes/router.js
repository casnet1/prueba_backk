const { Router } = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.send('Api de ejemplo')
})
module.exports = router