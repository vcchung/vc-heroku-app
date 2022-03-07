"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
dotenv_1.default.config();
mongoose_1.default
    .connect(`${process.env.MONGODB_CONNECT_URL}`)
    .then(() => console.log("MongoDB connected."))
    .catch((ex) => console.error(ex));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use("/api/tasks", taskRouter_1.default);
app.use(express_1.default.static("client/build"));
app.get("*", (request, response) => {
    response.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Express is listening in port ${PORT}`);
});
