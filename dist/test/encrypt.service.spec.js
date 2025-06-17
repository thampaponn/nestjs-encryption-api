"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt_service_1 = require("../src/encrypt/encrypt.service");
const testing_1 = require("@nestjs/testing");
describe('EncryptService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [encrypt_service_1.EncryptService],
        }).compile();
        service = module.get(encrypt_service_1.EncryptService);
    });
    it('should encrypt and return data1 and data2', () => {
        const payload = 'test data';
        const result = service.encrypt(payload);
        expect(result.successful).toBe(true);
        expect(result.data).toHaveProperty('data1');
        expect(result.data).toHaveProperty('data2');
    });
    it('should decrypt the payload back to original', () => {
        const payload = 'test data';
        const { data } = service.encrypt(payload);
        const result = service.decrypt(data.data1, data.data2);
        expect(result.successful).toBe(true);
        expect(result.data.payload).toBe(payload);
    });
});
//# sourceMappingURL=encrypt.service.spec.js.map