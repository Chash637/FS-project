// 3. Create an event emitter that emits a greet event and logs a message, and emit a login event with a username and log "<username> has logged in".
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Listener for 'greet' event
emitter.on('greet', () => {
  console.log('Hello! Welcome to the event system.');
});

// Listener for 'login' event, accepts username argument
emitter.on('login', (username) => {
  console.log(`${username} has logged in`);
});

// Emit the 'greet' event
emitter.emit('greet');

// Emit the 'login' event with a username
emitter.emit('login', 'Alice');
