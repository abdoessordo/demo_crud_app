"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedOrigins = void 0;
const constatns_1 = require("./constatns");
// combine all allowed hosts and ports
exports.allowedOrigins = constatns_1.constants.WHITE_LISTED_HOSTS.map((host) => {
    return constatns_1.constants.WHITE_LISTED_PORTS.map((port) => {
        return `http://${host}:${port}`;
    });
}).flat();
