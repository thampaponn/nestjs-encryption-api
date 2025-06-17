"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const crypto = require("crypto");
const CryptoJS = require("crypto-js");
let EncryptService = class EncryptService {
    constructor() {
        this.privateKey = fs.readFileSync('./src/keys/private.pem', 'utf8');
        this.publicKey = fs.readFileSync('./src/keys/public.pem', 'utf8');
    }
    encrypt(payload) {
        try {
            const aesKey = crypto.randomBytes(32).toString('hex').slice(0, 32);
            const data2 = CryptoJS.AES.encrypt(payload, aesKey).toString();
            const buffer = Buffer.from(aesKey);
            const data1 = crypto.privateEncrypt(this.privateKey, buffer).toString('base64');
            return {
                successful: true,
                error_code: '200',
                data: { data1, data2 }
            };
        }
        catch (error) {
            return {
                successful: false,
                error_code: '500',
                data: { error: error.message }
            };
        }
    }
    decrypt(data1, data2) {
        try {
            const aesKey = crypto.publicDecrypt(this.publicKey, Buffer.from(data1, 'base64')).toString();
            const bytes = CryptoJS.AES.decrypt(data2, aesKey);
            const payload = bytes.toString(CryptoJS.enc.Utf8);
            return {
                successful: true,
                error_code: '200',
                data: { payload }
            };
        }
        catch (error) {
            return {
                successful: false,
                error_code: '500',
                data: { error: error.message }
            };
        }
    }
};
exports.EncryptService = EncryptService;
exports.EncryptService = EncryptService = __decorate([
    (0, common_1.Injectable)()
], EncryptService);
//# sourceMappingURL=encrypt.service.js.map