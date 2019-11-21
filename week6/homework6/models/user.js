const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

// const Recipe = require('./recipe');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user name is required'],
    // defining an error message
    minLength: [2, 'Name must be longer than 1 letter'],
    maxLength: [20, 'A name can only have a maximum of 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'An Email Address is required'],
    validate: {
      validator: function(valueToValidate) {
        return isEmail(valueToValidate);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, 'A password is required'],
    minLength: [6, 'the minimum length is 6 characters'],
    maxLength: [60, 'the maximum characters allowed is 30'],
  },
  recipes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

// UserSchema.plugin(require('mongoose-autopopulate'));

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
