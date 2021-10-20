// !Route: /api/users 

const router = require('express').Router();

// * Testing Route * //
router.get('/', (req, res) => {
   res.send("User Route");
});

// TODO: GET all users
// TODO: GET a single user by its _id and populated thought and friend data
// TODO: POST a new user
// TODO: PUT to update a user by its _id
// TODO: DELETE to remove user by its _id
// TODO: BONUS: Remove a user's associated thoughts when deleted

// * Example Data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }


// !Route: /api/users/:userId/friends/:friendId
// TODO: POST to add a new friend to a user's friend list
// TODO: DELETE to remove a friend from a user's friend list

module.exports = router;