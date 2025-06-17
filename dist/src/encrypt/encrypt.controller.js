"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptController = void 0;
const common_1 = require("@nestjs/common");
const encrypt_service_1 = require("./encrypt.service");
const encrypt_dto_1 = require("./dto/encrypt.dto");
const decrypt_dto_1 = require("./dto/decrypt.dto");
let EncryptController = class EncryptController {
    constructor(service) {
        this.service = service;
    }
    encrypt(body) {
        return this.service.encrypt(body.payload);
    }
    decrypt(body) {
        return this.service.decrypt(body.data1, body.data2);
    }
};
exports.EncryptController = EncryptController;
__decorate([
    (0, common_1.Post)('get-encrypt-data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [encrypt_dto_1.EncryptDto]),
    __metadata("design:returntype", void 0)
], EncryptController.prototype, "encrypt", null);
__decorate([
    (0, common_1.Post)('get-decrypt-data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [decrypt_dto_1.DecryptDto]),
    __metadata("design:returntype", void 0)
], EncryptController.prototype, "decrypt", null);
exports.EncryptController = EncryptController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [encrypt_service_1.EncryptService])
], EncryptController);
//# sourceMappingURL=encrypt.controller.js.map