import mongoose from 'mongoose';

import { User } from '../../modules/users/schema/User.schema';

import dotenv from 'dotenv';
dotenv.config();

class MongoMock {
    connect() {
        mongoose.connect(`${process.env.MONGO_URL}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    };

    close() {
        mongoose.disconnect();
    };

    async delete() {
        await User.deleteMany({ email: 'test@example.com' })
    }
};

export default new MongoMock();