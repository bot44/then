'use strict';

function then(value, onFulfilled, onRejected) {
  if (value != null && typeof value.then == 'function') {
    value.then(onFulfilled, onRejected);
  } else {
    onFulfilled(value);
  }
}

module.exports = then;
