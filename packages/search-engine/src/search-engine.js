const fastify = require('fastify');
const mongoose = require('mongoose');

function searchEngine() {
  // TODO
}

// initialized Fastify App PENDING HIDE CONNECTION DATA
const app = fastify();
const mongoURI = 'mongodb+srv://jackodev:SashaDev2023$@first-step.z7r13.mongodb.net/searchEngineDB?retryWrites=true&w=majority';

// connected fastify to mongoose
try {
  mongoose.connect(mongoURI);
  console.log('DB Connected...');
} catch (e) {
  console.error(e);
}

app.get('/', (request, reply) => {
  try {
    reply.send('Welcome to the search');
  } catch (e) {
    console.error(e);
  }
});

app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});

module.exports = searchEngine;
