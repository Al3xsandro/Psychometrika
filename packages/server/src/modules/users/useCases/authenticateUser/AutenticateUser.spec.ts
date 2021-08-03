import { app } from '../../../../shared/infra/http/app';
import request from 'supertest';

import MongoMock from '../../../../shared/tests/MongoMock';

describe('AuthenticateUserCase', () => {
    beforeAll(async () => {
        MongoMock.connect();
    });

    afterAll(() => {
        MongoMock.close();
    });
    
    it('should authenticate to receive jwt token', async () => {
        const response = await request(app).post('/v1/login').send({
            email: 'test@example.com',
            password: 'testpass'
        });

        expect(response.body).toHaveProperty("token");
    });
});