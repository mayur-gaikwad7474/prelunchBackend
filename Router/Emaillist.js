const express = require('express')
const router = express.Router()
const Email = require('../Schema/Emaillist')
const Premium = require('../Schema/Premium')

router.post('/email', async (req, res) => {
    try {
        await Email.create(req.body)
        if (req.body.ref !== "") {
            const userExist = await Email.findOne({ email: req.body.ref })
            if (userExist !== null) {
                userExist.count++
                userExist.save()
                if (userExist.count === 5) {
                    await Premium.create({ email: req.body.ref, userName: userExist.userName })
                    return res.status(200).json({
                        message: "user added"
                    })
                } else {
                    return res.status(200).json({
                        message: "user added"
                    })
                }
            } else {
                return res.status(200).json({
                    message: "user added"
                })
            }
        } else {
            return res.status(200).json({
                message: "user added"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: "email all ready exists"
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