// /api/users
const router = require('express').Router();

// get all comments
router.get('/', (req, res) => {
   res.send("Hello");
});

module.exports = router;