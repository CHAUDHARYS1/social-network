// TODO: 3 requirements

const {
    Schema,
    model,
    Types
} = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
        // TODO: User a getter method to format the timestamp on query
    }
}, {
    toJSON: {
        getters: true
    }
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
        // TODO: Must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
        // TODO: User a getter method to format the timestamp on query
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