const express = require("express");
const path = require("path");

const app = new express();

var port = process.env.PORT || 3000;

app.set("PORT", port);

app.use(express.static("./client/build"));

const entryPoint = path.resolve(__dirname, "client", "build", "index.html");

app.get("*", (req, res) => 
{
    res.sendFile(path.resolve( entryPoint ));
 });

app.listen(port, () => console.log("listen on this port: " + port));