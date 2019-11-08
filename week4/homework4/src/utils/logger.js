/* eslint-disable */
let debug = false;
debug = true;

/*
const log = stuff => {
  if (debug) {
	if (stuff) {
		console.log(stuff)
	}
	else {
		console.log()
	}
  }
}
*/

function logger(strings, ...values) {
  if (!debug) {
    return;
  }

  var str = '';

  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] === 'object') {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            str += values[i - 1].stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(values[i - 1]);
            continue;
          } catch (err) {} // eslint-disable-line no-empty
        }
      }

      str += values[i - 1];
    }

    str += strings[i];
  }

  console.log(str); // eslint-disable-line no-console

  return str;
}

// const log = stuff => (debug ? console.log(stuff) : null);

module.exports = logger;
