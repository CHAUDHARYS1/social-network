// TODO: 1 requirement

const {
    Schema,
    model
} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // TODO: Need to add email validation
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }, ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, ],
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// TODO: Create a virtual called `friendCount` that retrieves the length of the user's friends array field on query.

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


// * Example from previous project * //
// PizzaSchema.virtual('commentCount').get(function() {
//    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
//  });

// * Example from previous project * //
// ThoughtSchema.virtual('reactionCount').get(function () {
//    return this.reactions.length;
// });


const User = model('User', UserSchema);
module.exports = User;