const {
    Thought, User
} = require('../models');

const userController = {

    // TODO: GET all users
    getAllUser(req, res){
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
    // TODO: GET a single user by its _id and populated thought and friend data
    // TODO: POST a new user
    // TODO: PUT to update a user by its _id
    // TODO: DELETE to remove user by its _id
    // TODO: BONUS: Remove a user's associated thoughts when deleted


}

module.exports = userController;