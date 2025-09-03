const chalk = require('chalk');

function color(text, colorName) {
  return chalk.keyword(colorName)(text);
}

module.exports = { color };
