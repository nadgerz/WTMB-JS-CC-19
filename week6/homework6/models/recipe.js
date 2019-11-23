const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minLength: [2, 'Title should be longer than 1 letter'],
    maxLength: [30, 'The maximum characters allowed is 30 characters'],
  },
  versions: [
    {
      type: Object,
    },
  ],
  users: [
    {
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;
