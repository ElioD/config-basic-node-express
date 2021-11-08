"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCamopo = void 0;
var express_validator_1 = require("express-validator");
var validarCamopo = function (req, res, next) {
    var erros = (0, express_validator_1.validationResult)(req);
    if (!erros.isEmpty()) {
        return res.status(400).json(erros);
    }
    next();
};
exports.validarCamopo = validarCamopo;
//# sourceMappingURL=validar-campo.js.map