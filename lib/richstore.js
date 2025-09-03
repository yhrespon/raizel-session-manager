const { makeInMemoryStore } = require('@whiskeysockets/baileys');

function createToxxicStore(path, options) {
  const store = makeInMemoryStore(options);
  // tu peux ajouter la persistance dans path si nécessaire
  return store;
}

module.exports = createToxxicStore;
