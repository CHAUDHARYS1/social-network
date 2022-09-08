const {
    Thought, User
} = require('../models');

const userController = {

    // TODO: GET all users
    getAllUsers(req, res) {
        User.find({})
          .populate({
            path: "friends",
          })
          .populate({
            path: "thoughts",
            select: "-__v",
          })
          .select("-__v")
          .sort({ _id: -1 })
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
      },
    // TODO: GET a single user by its _id and populated thought and friend data
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .populate({
            path: "thoughts",
            select: "-__v",
          })
          .select("-__v")
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
      },
    // TODO: POST a new user
    createUser({ body }, res) {
        User.create(body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.json(err));
      },
    
    // TODO: PUT to update a user by its _id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No User found with this id!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      },
    // TODO: DELETE to remove user by its _id
    deleteUser({ params }, res) {
        User.findOneAndDelete(
          { _id: params.id },
          { $pull: { friends: { friendId: params.friendId } } },
          { new: true }
        )
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.json(err));
      },
    // TODO: BONUS: Remove a user's associated thoughts when deleted


}

module.exports = userController;