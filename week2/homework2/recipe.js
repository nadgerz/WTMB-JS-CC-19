const uuidv1 = require('uuid/v1');
const RecipeVersion = require('./recipeVersion');

const Recipe = class {
  constructor(title, details) {
    this.title = title;
    this.id = `${this.title.replace(' ', '').toLowerCase()}-${uuidv1()}`;
    // this.images = [] // TODO: implement an images array
    this.dateCreated = new Date();
    // TODO: limit versions array to... 15?
    this.versions = [];
    this.versions.push(new RecipeVersion(details, this.versions.length + 1));
  }

  set title(title) {
    // TODO: check it is present and unique
    this._title = title;
  }

  addVersion(newVersion) {
    const id = this.getNextVersionId();
    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getVersion(versionNo) {
    return this.versions[versionNo - 1];
  }

  deleteVersionById(id) {
    this.versions = this.versions.filter(version => version.id !== id);
  }

  // TODO: hide these functions?
  getVersionIndexById(id) {
    return this.versions.map(version => version.id).indexOf(id);
  }

  getNextVersionId() {
    return this.versions[this.versions.length - 1].id + 1;
  }
};

module.exports = Recipe;
