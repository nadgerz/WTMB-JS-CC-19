const mongoose = require('mongoose');

const MeetupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  location: {
    type: String,
    required: true,
    minLength: 2,
  },
  attendees: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Person',
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

//
// MeetupSchema.methods.attend = async function(meetup) {
//     this.meetups.push(meetup);
//     await this.save();
// };

MeetupSchema.plugin(require('mongoose-autopopulate'));

const MeetupModel = mongoose.model('Meetup', MeetupSchema);

module.exports = MeetupModel;
