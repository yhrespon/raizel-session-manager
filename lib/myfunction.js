const fs = require('fs');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isUrl(text) {
  return /https?:\/\//.test(text);
}

module.exports = {
  sleep,
  isUrl
};
