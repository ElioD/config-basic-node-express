"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var test_1 = __importDefault(require("../routes/test"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPath = {
            test: "/api/test",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        //Se llmana los middlewares
        this.middlewares();
        //Se llaman las rutas
        this.routes();
    }
    Server.prototype.middlewares = function () {
        //Cors
        this.app.use((0, cors_1.default)());
        //Lectura del body en json
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static("public"));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPath.test, test_1.default);
    };
    Server.prototype.listen = function () {
        this.app.listen(this.port, function () {
            console.log("Servidor Online");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map