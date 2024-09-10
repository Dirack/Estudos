"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_http_1 = require("node:http");
var server = (0, node_http_1.createServer)(function (req, res) {
    res.send("Ola mundo");
});
server.listen(3000, function () {
    console.log("Server working");
});
