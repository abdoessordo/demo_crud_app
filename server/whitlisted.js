"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constatns_1 = require("./constatns");
// combine all allowed hosts and ports
var allowedOrigins = constatns_1.constants.WHITE_LISTED_HOSTS.map(function (host) {
    return constatns_1.constants.WHITE_LISTED_PORTS.map(function (port) {
        return "http://".concat(host, ":").concat(port);
    });
});
console.log("allowedOrigins: ", allowedOrigins);
