// const fs = require('fs');
// const Flatted = require('flatted/cjs');

module.exports = class Service {
  // this below was deleted in class - ESLint threw an error
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return this.model.find();
  }

  async add(item) {
    return this.model.create(item);
  }

  async del(itemId) {
    return this.model.remove({ _id: itemId });
  }

  async find(itemId) {
    return this.model.findById(itemId);
  }

  async saveAll() {
    return this.model.findById();
  }
};
