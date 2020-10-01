// import Node.js library for file system (fs)
// example of importing default exported method from file
const fs = require('fs');

// use `Sync` in name to indicate purposeful blocking
const writeSyncFile = (path = '.', contents = 'sync test', encoding = 'utf8') =>
    // Anti-pattern - use the sync method for blocking code when synchronous execution is mandatory
    // should be rarely used
    fs.writeFileSync(path, contents, { encoding });
// console.log is/can be blocking - assume it is sync
const printMessageSync = (message = 'hello world') => {
    /* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
    console.log(message);
};

// timestamp used for unique filenames or logs
const timeStampSync = () => {
    const date = new Date();
    return date.getTime();
};

// export defined at bottom of file
module.exports = {
    printMessageSync,
    timeStampSync,
    writeSyncFile,
};
