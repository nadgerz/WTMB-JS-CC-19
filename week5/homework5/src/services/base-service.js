module.exports = class Service {
  constructor(model) {
    this.model = model;
  }

  update() {
    return this.model.save();
  }

  resolved(result) {
    console.log('Resolved');
  }

  rejected(result) {
    console.error(result);
  }


  findAll() {
    // return this.model.find();
  return Promise.reject(new Error('fail')).catch(console.error)
    // return new Promise.reject(new Error('BOOOOO'));
  }

  add(item) {
    return this.model.create(item);
  }

  deleteById(id) {
    return this.model.deleteOne({ _id: id });
  }

  delete(query) {
    return this.model.deleteMany(query);
  }

  findById(id) {
    return this.model.findById(id);
  }

  find(query) {
    return this.model.find(query);
  }

  // async saveAll() {
  //   return this.model.findA();
  // }
};
