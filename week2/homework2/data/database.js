const fs = require('fs');

const save = function(filename, data) {
  fs.writeFileSync(
    `./src/scratch/lecture2/homework2/data/${filename}.json`,
    JSON.stringify(data, null, 2),
  );

  console.log('The file was saved!');
};

const load = function(filename) {
  console.log('loading');
  return JSON.parse(
    fs.readFileSync(
      `./src/scratch/lecture2/homework2/data/${filename}.json`,
      'utf8',
    ),
  );
};

module.exports = { save, load };
