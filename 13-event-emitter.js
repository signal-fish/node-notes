const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// Assign the event handler to the response event

customEmitter.on(
  "response",
  // event handler
  (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
  }
);

// Assign the event handler to the response event
customEmitter.on(
  "response",
  // event handler
  () => {
    console.log("some other logic here");
  }
);

// Fire the response event
customEmitter.emit("response", "Signal Fish", 999);
