"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    id: 1, email: "saiful@gmail.com",
    userId: 221,
    githubId: "github",
    startTrial: function () { return "Trial started"; },
    getCupon: function (name, value) {
        return 100;
    },
};
var adminUser = {
    id: 1, email: "saiful@gmail.com",
    userId: 221,
    role: "admin",
    githubId: "github",
    startTrial: function () { return "Trial started"; },
    getCupon: function (name, value) {
        return 100;
    },
};
user.email = "samim@gmail.com";
