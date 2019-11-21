module.exports = class Service {
  constructor(model) {
    this.model = model;
  }

  update() {
    return this.model.save();
  }

  findAll() {
    // return axios.get("http://moppetx.com")
    // return this.model.find();
    // return Promise.reject(new Error('fail')).catch(console.error);

    const data = { name: 'nin', status: 'wonky' };
    console.log('base service');
    console.log(data);

    const promise = Promise.reject('bad apple');
    console.log(promise);

    return promise;
  }

  /*
	 fetch('https://example.com')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'https://example.com'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})
*/

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

// mongoose query options
//
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()
