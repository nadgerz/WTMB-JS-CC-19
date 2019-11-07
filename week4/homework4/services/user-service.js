// import validator from 'validator';
const isEmail = require('validator/lib/isEmail');
const BaseService = require('./base-service');
const UserModel = require('../models/user');

class UserService extends BaseService {
  constructor() {
    super(UserModel, `${__dirname}/../user-database.json`);
  }

  async add({name, email, password}) {
    if (!isEmail(email)) {
      return null;
    }
    const user = new UserModel(name, email, password);
    return await super.add(user);
  }
}

module.exports = new UserService();
