
const events = require('events');
const eventEmitter = new events.EventEmitter();

// create an event handler:
const myEventHandler = function() {
    console.log('i hear a scream');
}

// assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// fire the scream event:
eventEmitter.emit('scream');