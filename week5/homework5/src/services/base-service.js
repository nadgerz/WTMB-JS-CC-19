module.exports = class Service {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return this.model.find();
  }

  async add(item) {
    return this.model.create(item);
  }

  async deleteById(id) {
    return this.model.deleteOne({ _id: id });
  }

  async delete(query) {
    return this.model.deleteMany(query);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async find(query) {
    return this.model.find(query);
  }

  // async saveAll() {
  //   return this.model.findA();
  // }
};
