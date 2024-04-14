const express = require("express")
const z = require("zod")
const { User } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const router = express.Router()

const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})

router.post('/signup', async (req, res) => {
    const body = req.body

    const {success} = signupSchema.safeParse(body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = User.findOne({
        username: body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body)

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token
    })
})

module.exports = router
