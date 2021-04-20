const path = require("path");

const port = process.env.PORT || 8000;

const entryPoint = path.resolve(__dirname, "client", "build", "index.html");

const postsDirectory = path.resolve( process.cwd(), 'posts');

module.exports = {port, entryPoint, postsDirectory};