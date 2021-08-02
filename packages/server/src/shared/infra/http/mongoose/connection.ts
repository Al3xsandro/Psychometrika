import mongoose from 'mongoose';
import { AppError } from '../../../errors/AppError';

try {
    mongoose.connect(`${process.env.MONGO_URL}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log(`+ database connected`)
    });
} catch (err) {
    throw new AppError(`Error on connect database: ${err}`, 500);
};