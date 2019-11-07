// import validator from 'validator';
const isEmail = require('validator/lib/isEmail');
const BaseService = require('./base-service');
const UserModel = require('../models/user');

class UserService extends BaseService {
  constructor() {
    super(UserModel, `${__dirname}/../user-database.json`);
  }

  async add(user) {
    if (!isEmail(user.email)) {
      return null;
    }
    return await super.add(user);
  }
}

module.exports = new UserService();
