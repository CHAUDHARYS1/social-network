const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    email: {
        type: String, 
        unique: true, 
        required: true
        // TODO: Need to add email validation
    },
    thoughts: [{
        ref: 'Thoughts'
    }],
    friends: [{ 
        ref: 'Friends'
    }]
},
{
    toJSON: {
        virtuals: true, 
        getters: true
    }, 
    id: false
});

// TODO: Create a virtual called `friendCount` that retrieves the length of the user's friends array field on query.

// UserSchema.virtuals('friendCount').get(function(){ 
    // return this.friends.reduce((total, friend) => total + friend.)    
// });


// * Example from previous project * //
// PizzaSchema.virtual('commentCount').get(function() {
//    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
//  });

// create the pizza model using the pizzaSchema
const User = model('User', UserSchema);
module.exports = User;