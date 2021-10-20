const {
    Schema,
    model
} = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
        // TODO: Must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    }
})

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;