import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('EncryptController', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/get-encrypt-data (POST) should return encrypted data', async () => {
        const response = await request(app.getHttpServer())
            .post('/get-encrypt-data')
            .send({ payload: 'test message' })
            .expect(201);

        expect(response.body.successful).toBe(true);
        expect(response.body.data).toHaveProperty('data1');
        expect(response.body.data).toHaveProperty('data2');
    });

    it('/get-decrypt-data (POST) should return decrypted payload', async () => {
        const encryptResponse = await request(app.getHttpServer())
            .post('/get-encrypt-data')
            .send({ payload: 'test message' });

        const { data1, data2 } = encryptResponse.body.data;

        const decryptResponse = await request(app.getHttpServer())
            .post('/get-decrypt-data')
            .send({ data1, data2 })
            .expect(201);

        expect(decryptResponse.body.successful).toBe(true);
        expect(decryptResponse.body.data.payload).toBe('test message');
    });

    afterAll(async () => {
        await app.close();
    });
});
