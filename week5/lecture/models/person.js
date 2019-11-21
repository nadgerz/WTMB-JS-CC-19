/* eslint-disable */

const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  meetups: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Meetup',
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

PersonSchema.methods.attend = async function(meetup) {
  this.meetups.push(meetup);
  meetup.attendees.push(this);
  await PersonService.attendMeetup(person, meetup);
  await meetup.save();
};

PersonSchema.plugin(require('mongoose-autopopulate'));

const PersonModel = mongoose.model('Person', PersonSchema);

module.exports = PersonModel;
