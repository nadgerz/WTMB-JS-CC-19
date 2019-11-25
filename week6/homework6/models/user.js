const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

// const Recipe = require('./recipe');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    // defining an error message
    minlength: [2, 'Name should be longer than 1 letter'],
    maxlength: [20, 'The maximum characters allowed is 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'A User with this Email already exists'],
    validate: {
      validator: function(valueToValidate) {
        return isEmail(valueToValidate);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'the minimum length is 6 characters'],
    maxlength: [30, 'the maximum characters allowed is 30'],
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
