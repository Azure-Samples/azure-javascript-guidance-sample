// import specific functions
const exampleSync = require('./api/exampleSync');

// set variable from interpolated string
const message = `hello world ${exampleSync.timeStampSync()}`;

// run function
exampleSync.printMessageSync(message);
