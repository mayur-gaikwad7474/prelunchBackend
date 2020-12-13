const express = require('express')
const router = express.Router()
const Email = require('../Schema/Emaillist')

router.post('/email', async (req, res) => {
    try {
        await Email.create(req.body)
        return res.status(200).json({
            message:"added to joinlist"
        })
    } catch (error) {
        return res.status(500).json({
            error : "email all ready exists"
        })
    }
})

router.get('/email', async (req, res) => {
    try {
      const data = await Email.find({})
      res.send(data)
    } catch (error) {
        res.status(500).json({
            error 
        })
    }
})

module.exports = router