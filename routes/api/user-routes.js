// !Route: /api/users 

const router = require('express').Router();
const {
   getAllUsers,
   getUserById,
   createUser,
   updateUser,
   deleteUser
   // addFriend,
   // removeFriend
} = require("../../controllers/user-controller");


// * Testing Route * //
router.get('/', (req, res) => {
   res.send("User Route");
});
router.route("/")
   // TODO: GET all users
   .get(getAllUsers)

   // TODO: POST a new user
   .post(createUser)

// .post(addFriend);


// TODO: BONUS: Remove a user's associated thoughts when deleted
router.route("/:id")
   // TODO: GET a single user by its _id and populated thought and friend data
   .get(getUserById)
   // TODO: PUT to update a user by its _id
   .put(updateUser)
   // TODO: DELETE to remove user by its _id
   .delete(deleteUser);

// * Example Data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }


// !Route: /api/users/:userId/friends/:friendId
router.route("/:id/friends/:friendId")

   // TODO: POST to add a new friend to a user's friend list
   // .post(addFriend)

   // TODO: DELETE to remove a friend from a user's friend list
   // .delete(removeFriend);


module.exports = router;