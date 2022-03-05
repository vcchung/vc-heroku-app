"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var PORT = process.env.PORT || 5000;
var app = (0, express_1["default"])();
app.get("/api/message", function (request, response) {
    response.send("This is message sent from Vincent!");
});
app.get("/api/json", function (_, res) {
    res.json({
        success: true,
        author: "vincent"
    });
});
app.use(express_1["default"].static("client/build"));
app.get("*", function (request, response) {
    response.sendFile(path_1["default"].resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, function () {
    console.log("Express is listening in port ".concat(PORT));
});
