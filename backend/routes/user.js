const express = require("express")
const z = require("zod")
const { User } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const router = express.Router()

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})

router.post('/signup', async (req, res) => {
    const body = req.body

    const {success} = signupSchema.safeParse(body)
    if (!success) {
        return res.status(401).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: body.username
    })

    if(existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.status(201).json({
        message: "User created successfully",
        token
    })
})

const signInSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})

router.post('/signin', async (req, res) => {
    const body = req.body

    const {success} = signInSchema.safeParse(body)
    if (!success) {
        return res.status(401).json({
            message: "Error while logging in"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password,
    })

    if(user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        return res.status(202).json({
            token
        })
    }

    return res.status(404).json({
        message: "User not found"
    })
})

module.exports = router
