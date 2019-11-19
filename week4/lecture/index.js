const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PersonService = require('./services/person-service');

app.set('view engine', 'pug');
app.use(bodyParser.json());

app.get('/', (request, response) => {
  // response.send('<h1>Hello</h1>');
  // response.sendFile(`${__dirname}/index.html`);
  response.render('index');
});

app.get('/person/all', async (request, response) => {
  const people = await PersonService.findAll();
  response.render('person', { people });
});

app.get(`/person/:id`, async (request, response) => {
  const id = request.params.id;
  const person = await PersonService.find(id);

  response.send(person);
});

app.post(`/person`, async (request, response) => {
  // console.log(request.body);
  const person = await PersonService.add(request.body);
  response.send(person);
});

app.delete(`/person/:id`, async (request, response) => {
  const id = request.params.id;
  await PersonService.del(id);
  response.send('ok');
  //   axios.delete
});

// axios.get

app.listen(3000, () => {
  console.log('listening');
});
