// !Route: /api/thoughts

const router = require('express').Router();
const getAllThought = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);


// * Testing Route * //
router.get('/', (req, res) => {
    res.send("Thoughts Route");
 });

// TODO: GET to get all thoughts
// TODO: GET to get a single thought by its _id
// TODO: POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// TODO: PUT to update a thought by its _id
// TODO: DELETE to remove a thought by its _id

// * example data
// {
//    "thoughtText": "Here's a cool thought...",
//    "username": "lernantino",
//    "userId": "5edff358a0fcb779aa7b118b"
// }

// !Route: /api/thoughts/:thoughtId/reactions
// TODO: POST to create a reaction stored in a single thought's reactions array field
// TODO: DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;