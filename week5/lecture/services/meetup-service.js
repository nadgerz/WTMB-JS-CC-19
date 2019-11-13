const BaseService = require('./base-service');
const MeetupModel = require('../models/meetup');

class MeetupService extends BaseService {
  // model = MeetupModel;
  constructor() {
    super(MeetupModel);
  }
}

module.exports = new MeetupService();
