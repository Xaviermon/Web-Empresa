const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    console.log('estoy funcionando');
})

module.exports = router;
