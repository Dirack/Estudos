"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
console.log(validator_1.default.isEmail('rodolfo_profissional@hotmail.com'));
console.log(validator_1.default.isEmail('emailinvalido'));
console.log(validator_1.default.isIP('192.190.0.12'));
console.log(validator_1.default.isLowercase('RODOLFO'));
