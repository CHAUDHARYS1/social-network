const router = require('express').Router();

// * Testing Route * //
router.get('/', (req, res) => {
    res.send("Thoughts Route");
 });


module.exports = router;