// !Route: /api/thoughts

const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require("../../controllers/thought-controller");


// TODO: GET to get all thoughts
router.route("/")
    .get(getThoughts)
    // TODO: POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    .post(createThought);


// TODO: GET to get a single thought by its _id
router.route("/:id")
    .get(getSingleThought)

    // TODO: PUT to update a thought by its _id
    .put(updateThought)
    // TODO: DELETE to remove a thought by its _id
    .delete(deleteThought);



// * Testing Route * //
router.get('/', (req, res) => {
    res.send("Thoughts Route");
});


// !Route: /api/thoughts/:thoughtId/reactions
// TODO: POST to create a reaction stored in a single thought's reactions array field
router.route("/:id/reactions/")
// .post(addReaction);

// TODO: DELETE to pull and remove a reaction by the reaction's reactionId value
router.route("/:id/reactions/:reactionId")
// .delete(removeReaction)

module.exports = router;