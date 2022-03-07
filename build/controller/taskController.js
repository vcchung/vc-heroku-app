"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllTasks = (reqeust, response) => {
    response.status(200).json([
        {
            name: "do something",
            updatedTime: new Date(),
        },
        {
            name: "do another thing",
            updatedTime: new Date(),
        },
    ]);
};
exports.default = { getAllTasks };
