import bcrypt from 'bcryptjs';

import MongoMock from '../../../../shared/tests/MongoMock';

import { User } from "../../schema/User.schema";

describe('CreateUserCase', () => {
    beforeAll(async () => {
        MongoMock.connect();
        MongoMock.delete();
    });

    afterAll(async () => {
        MongoMock.close();
    });
    
    it('should create user and receive id', async () => {
        const response = await User.create({
            email: 'test@example.com',
            password: bcrypt.hashSync('testpass', 8),
        });
        
        const user = await User.findById(response._id);

        expect(String(response._id)).toBe(String(user?._id));
    });
});