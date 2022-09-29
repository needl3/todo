const router = require("express").Router()

router.post("/login", (req, res) => {
        console.log(req.body)
        return res.json({
            token: "hereisthetoken"
        })
    })

export default router