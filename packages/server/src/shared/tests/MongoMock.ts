import mongoose from 'mongoose';

import { User } from '../../modules/users/schema/User.schema';

import dotenv from 'dotenv';
dotenv.config();

class MongoMock {
    async connect() {
        try {
            await mongoose.connect(`${process.env.MONGO_URL}`, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            });
        } catch (err) {
            throw new Error(`Error on connect database: ${err}`);
        };
    };

    close() {
        mongoose.disconnect((err) => {
            throw new Error(`Error on connect database: ${err}`);
        });
    };

    async delete() {
        await User.deleteMany({ email: 'test@example.com' })
    }
};

export default new MongoMock();