const express = require('express');

const router = express.Router();

router.get("/:id", (req, res) => {
    let id = req.params.id;
    let leet = require(`../leets/${id}`);
    res.send(leet);
});

module.exports = router;