// import validator from 'validator';
// const isEmail = require('validator/lib/isEmail');
const BaseService = require('./base-service');
const UserModel = require('../models/user');

class UserService extends BaseService {
  constructor() {
    super(UserModel);
  }

  async add() {
    console.log('userService: add');
  }

  // async add({name, email, password}) {
  //   if (!isEmail(email)) {
  //     return null;
  //   }
  //   const user = new UserModel(name, email, password);
  //   return await super.add(user);
  // }
}

module.exports = new UserService();

//class PersonService extends BaseService {
//   // model = PersonModel;
//   constructor() {
//     super(PersonModel);
//   }
//
//   async attendMeetup(person, meetup) {
//     person.meetups.push(meetup);
//     meetup.attendees.push(person);
//     await person.save();
//     await meetup.save();
//   }
// }
