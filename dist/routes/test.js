"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var test_1 = require("../controller/test");
var validar_campo_1 = require("../middlewares/validar-campo");
var router = (0, express_1.Router)();
router.get("/:id", [(0, express_validator_1.check)("id", "No es un ID valido").isMongoId(), validar_campo_1.validarCamopo], test_1.test);
exports.default = router;
//# sourceMappingURL=test.js.map