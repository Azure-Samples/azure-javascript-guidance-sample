// import Node.js library for file system (fs)
// example of importing one namespace from file's exports
const fs = require('fs').promises;

// async function example
const writeFile = async (
    path = '.',
    contents = 'async test',
    encoding = 'utf8'
) => {
    // use the async method for non-blocking code
    await fs.writeFile(path, contents, { encoding });
};

// default export indicates top/single object to export
module.exports = {
    writeFile,
};
