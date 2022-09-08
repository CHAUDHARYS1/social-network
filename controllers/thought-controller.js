const {
    Thought,
    User
} = require('../models');

const thoughtController = {

    // TODO: GET to get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .sort({
                createdAt: -1
            })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: GET to get a single thought by its _id
    getSingleThought({
        params
    }, res) {
        Thought.findOne({
                _id: params.id
            })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res
                        .status(404)
                        .json({
                            message: "Thought with this ID does not exist."
                        });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought({
        params,
        body
    }, res) {
        Thought.create(body)
            .then((_id) => {
                return User.findOneAndUpdate({
                    _id: params.id
                }, {
                    $push: {
                        thoughts: _id
                    }
                }, {
                    new: true
                });
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({
                            message: "Thought has been created but no user with this id!",
                        });
                }

                res.json({
                    message: "Thought has been created!"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: PUT to update a thought by its _id
    updateThought({
        params,
        body
    }, res) {
        Thought.findOneAndUpdate({
                _id: params.id
            }, {
                $push: body
            }, {
                runValidators: true,
                new: true
            })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res
                        .status(404)
                        .json({
                            message: "Thought with this ID does not exist."
                        });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // TODO: DELETE to remove a thought by its _id
    deleteThought({
        params
    }, res) {
        Thought.findOneAndRemove({
                _id: params.id
            })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res
                        .status(404)
                        .json({
                            message: "Thought with this ID does not exist."
                        });
                }

                // remove thought id from user's `thoughts` field
                return User.findOneAndUpdate({
                    thoughts: params.id
                }, {
                    $pull: {
                        thoughts: params.id
                    }
                }, {
                    new: true
                });
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({
                            message: "Thought has been created but no user with this id!",
                        });
                }
                res.json({
                    message: "Thought has been deleted!"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    

}


module.exports = thoughtController;