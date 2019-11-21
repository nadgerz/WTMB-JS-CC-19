/* eslint-disable */

const BaseService = require('./base-service');
const MeetupModel = require('../models/meetup');

class MeetupService extends BaseService {
  model = MeetupModel; /* eslint-disable-line */
}

module.exports = new MeetupService();
