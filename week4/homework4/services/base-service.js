const fs = require('fs');
const Flatted = require('flatted/cjs');

module.exports = class Service {
  constructor(model, dbPath) {
    this.model = model;
    this.dbPath = dbPath;
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dbPath, 'utf8', async (err, file) => {
        if (err) {
          if (err.code === 'ENOENT') {
            await this.saveAll([]);
            return resolve([]);
          }
          return reject(err);
        }
        const items = Flatted.parse(file).map(this.model.create);

        resolve(items);
      });
    });
  }

  async add(item) {
    const allItems = await this.findAll();

    allItems.push(item);

    await this.saveAll(allItems);

    return item;
  }

  async update(updatedItem) {
    const allItems = await this.findAll();
    const itemIndex = allItems.findIndex(item => item.id === updatedItem.id);

    if (itemIndex < 0) {
      await this.add(updatedItem);
    } else {
      allItems.splice(itemIndex, 1, updatedItem);
      await this.saveAll(allItems);
    }
  }

  async delete(itemId) {
    let allItems = await this.findAll();

    const itemIndex = allItems.findIndex(item => item.id === itemId);

    if (itemIndex < 0) return;

    allItems = allItems.filter(item => item.id !== itemIndex);

    await this.saveAll(allItems);
  }

  async find(itemId) {
    const allItems = await this.findAll();

    return allItems.find(item => item.id === itemId);
  }

  async saveAll(items) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.dbPath, Flatted.stringify(items), err => {
        if (err) return reject(err);

        resolve();
      });
    });
  }
};
