const {
    Thought,
    User
} = require('../models');

const thoughtController = {

    // TODO: GET to get all thoughts
    getAllThought(req, res){
        Thought.find({})
        // TODO: reference user table
        // .populate({
        //     path: 'users', 
        //     select: '-__v'
        // })
        // TODO : What is select?
        // .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtsData => res.join(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
    // TODO: GET to get a single thought by its _id
    // TODO: POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // TODO: PUT to update a thought by its _id
    // TODO: DELETE to remove a thought by its _id


}

module.exports = thoughtController;