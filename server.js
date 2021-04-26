const express = require("express");

const { port } = require( "./config.js" );

const index = require( "./routes/index.js" );
const blog = require( "./routes/blog.js" );

const app = new express();

app.use(express.urlencoded({ extended: true }));

app.set("PORT", port);

app.use(express.static("./client/build"));

app.use("/", index);

app.use("/blog", blog);

// TODO - move to routes dir

app.listen(port, () => console.log("listen on this port: " + port));